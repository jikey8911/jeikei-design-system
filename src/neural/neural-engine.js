// Lightweight grid-based engine for WebGL rendering
import { getPreset } from './presets';

export class NeuralEngine3D {
  constructor({ width, height, preset = 'mission-control' }) {
    this.size = { width, height };
    this.setPreset(preset);
    this.nodes = [];
    this.velocities = [];
    this.energies = [];
    this.edges = [];
    this.lineEnergy = [];
    this.pulses = [];
    this.spatial = new Map();
    this.seed();
  }

  setPreset(presetName) {
    this.preset = getPreset(presetName);
  }

  seed() {
    const { width, height } = this.size;
    const spacing = this.preset.spacing;
    const cols = Math.max(6, Math.floor(width / spacing));
    const rows = Math.max(4, Math.floor(height / spacing));
    this.nodes = [];
    this.velocities = [];
    this.energies = [];
    this.edges = [];
    this.lineEnergy = [];
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        const px = (x + 0.5) * spacing + (Math.random() - 0.5) * 12;
        const py = (y + 0.5) * spacing + (Math.random() - 0.5) * 12;
        this.nodes.push([px, py, 0]);
        this.velocities.push([(Math.random() - 0.5) * 0.2, (Math.random() - 0.5) * 0.2, 0]);
        this.energies.push(Math.random() * 0.4);
      }
    }
    const index = (x, y) => y * cols + x;
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        const i = index(x, y);
        if (x < cols - 1) this.addEdge(i, index(x + 1, y));
        if (y < rows - 1) this.addEdge(i, index(x, y + 1));
      }
    }
    this.buildSpatial(spacing * 1.5);
  }

  resize(width, height) {
    this.size = { width, height };
    this.seed();
  }

  addEdge(a, b) {
    this.edges.push([a, b]);
    this.lineEnergy.push(0.2);
  }

  buildSpatial(cellSize) {
    this.cellSize = cellSize;
    this.spatial = new Map();
    this.nodes.forEach(([x, y], idx) => {
      const key = `${Math.floor(x / cellSize)}:${Math.floor(y / cellSize)}`;
      if (!this.spatial.has(key)) this.spatial.set(key, []);
      this.spatial.get(key).push(idx);
    });
  }

  neighborsAround(point, radius) {
    const { cellSize } = this;
    const cx = Math.floor(point.x / cellSize);
    const cy = Math.floor(point.y / cellSize);
    const res = [];
    const r = Math.ceil(radius / cellSize);
    for (let dx = -r; dx <= r; dx++) {
      for (let dy = -r; dy <= r; dy++) {
        const key = `${cx + dx}:${cy + dy}`;
        if (this.spatial.has(key)) res.push(...this.spatial.get(key));
      }
    }
    return res;
  }

  triggerPulse(point, intensity = 1) {
    const near = this.neighborsAround(point, this.preset.spacing * 2);
    near.forEach((idx) => {
      const [x, y] = this.nodes[idx];
      const dist = Math.hypot(x - point.x, y - point.y);
      const delay = dist * (0.4 / this.preset.pulseSpeed);
      this.pulses.push({ node: idx, at: performance.now() + delay, intensity });
    });
  }

  microPulse(point) {
    this.triggerPulse(point, 0.4);
  }

  attract(point, strength = this.preset.interactionStrength) {
    const near = this.neighborsAround(point, this.preset.spacing * 2.5);
    near.forEach((idx) => {
      const pos = this.nodes[idx];
      const vel = this.velocities[idx];
      const dx = point.x - pos[0];
      const dy = point.y - pos[1];
      const dist = Math.max(8, Math.hypot(dx, dy));
      const pull = (strength / dist) * 0.35;
      vel[0] += (dx / dist) * pull;
      vel[1] += (dy / dist) * pull;
      this.energies[idx] = Math.min(1, this.energies[idx] + 0.02);
    });
  }

  update(dt) {
    const now = performance.now();
    // apply pulses
    this.pulses = this.pulses.filter((p) => {
      if (now >= p.at) {
        this.energies[p.node] = Math.min(1, this.energies[p.node] + 0.5 * p.intensity);
        return false;
      }
      return true;
    });

    // integrate motion & decay
    for (let i = 0; i < this.nodes.length; i++) {
      const pos = this.nodes[i];
      const vel = this.velocities[i];
      pos[0] += vel[0] * dt;
      pos[1] += vel[1] * dt;
      vel[0] *= 0.95;
      vel[1] *= 0.95;
      this.energies[i] = Math.max(0, this.energies[i] - dt * 0.15);
    }

    // line energy from connected nodes
    this.edges.forEach(([a, b], idx) => {
      const e = (this.energies[a] + this.energies[b]) * 0.5;
      this.lineEnergy[idx] = e;
    });
  }
}
