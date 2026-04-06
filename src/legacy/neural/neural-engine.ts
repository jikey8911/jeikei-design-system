import { getPreset } from './presets';

type Point = { x: number; y: number };
type Node = [number, number, number];
type Velocity = [number, number, number];
type Edge = [number, number];
type Pulse = { node: number; at: number; intensity: number };

export class NeuralEngine3D {
  size: { width: number; height: number };
  preset: any;
  nodes: Node[] = [];
  velocities: Velocity[] = [];
  energies: number[] = [];
  edges: Edge[] = [];
  lineEnergy: number[] = [];
  pulses: Pulse[] = [];
  spatial: Map<string, number[]> = new Map();
  cellSize: number = 50;

  constructor({ width, height, preset = 'nebula' }: { width: number; height: number; preset?: string }) {
    this.size = { width, height };
    this.setPreset(preset);
    this.seed();
  }

  setPreset(presetName: string) {
    this.preset = getPreset(presetName);
  }

  seed() {
    const { width, height } = this.size;
    const spacing = this.preset.spacing || 60;
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

    const index = (x: number, y: number) => y * cols + x;
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        const i = index(x, y);
        if (x < cols - 1) this.addEdge(i, index(x + 1, y));
        if (y < rows - 1) this.addEdge(i, index(x, y + 1));
      }
    }
    this.buildSpatial(spacing * 1.5);
  }

  resize(width: number, height: number) {
    this.size = { width, height };
    this.seed();
  }

  addEdge(a: number, b: number) {
    this.edges.push([a, b]);
    this.lineEnergy.push(0.2);
  }

  buildSpatial(cellSize: number) {
    this.cellSize = cellSize;
    this.spatial = new Map();
    this.nodes.forEach(([x, y], idx) => {
      const key = `${Math.floor(x / cellSize)}:${Math.floor(y / cellSize)}`;
      if (!this.spatial.has(key)) this.spatial.set(key, []);
      this.spatial.get(key)!.push(idx);
    });
  }

  neighborsAround(point: Point, radius: number): number[] {
    const { cellSize } = this;
    const cx = Math.floor(point.x / cellSize);
    const cy = Math.floor(point.y / cellSize);
    const res: number[] = [];
    const r = Math.ceil(radius / cellSize);
    for (let dx = -r; dx <= r; dx++) {
      for (let dy = -r; dy <= r; dy++) {
        const key = `${cx + dx}:${cy + dy}`;
        const indices = this.spatial.get(key);
        if (indices) res.push(...indices);
      }
    }
    return res;
  }

  triggerPulse(point: Point, intensity: number = 1.2) {
    const waveSpeed = 0.35 / (this.preset.pulseSpeed || 1);
    const maxRadius = (this.preset.spacing || 60) * 8;
    const near = this.neighborsAround(point, maxRadius);
    
    near.forEach((idx) => {
      const [x, y] = this.nodes[idx];
      const dist = Math.hypot(x - point.x, y - point.y);
      if (dist > maxRadius) return;
      
      const delay = dist * waveSpeed;
      const waveIntensity = intensity * (1 - (dist / maxRadius) * 0.4);
      
      this.pulses.push({ 
        node: idx, 
        at: performance.now() + delay, 
        intensity: waveIntensity 
      });
    });
  }

  microPulse(point: Point) {
    this.triggerPulse(point, 0.4);
  }

  attract(point: Point, strength: number = this.preset.interactionStrength) {
    const near = this.neighborsAround(point, (this.preset.spacing || 60) * 2.5);
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

  update(dt: number) {
    const now = performance.now();
    this.pulses = this.pulses.filter((p) => {
      if (now >= p.at) {
        this.energies[p.node] = Math.min(1, this.energies[p.node] + 0.5 * p.intensity);
        return false;
      }
      return true;
    });

    for (let i = 0; i < this.nodes.length; i++) {
      const pos = this.nodes[i];
      const vel = this.velocities[i];
      pos[0] += vel[0] * dt;
      pos[1] += vel[1] * dt;
      vel[0] *= 0.95;
      vel[1] *= 0.95;
      this.energies[i] = Math.max(0, this.energies[i] - dt * 0.15);
    }

    this.edges.forEach(([a, b], idx) => {
      const e = (this.energies[a] + this.energies[b]) * 0.5;
      this.lineEnergy[idx] = e;
    });
  }
}

