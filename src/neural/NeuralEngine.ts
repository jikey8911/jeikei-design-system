export type NeuralNode = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  energy: number;
};

export type NeuralPulse = {
  x: number;
  y: number;
  life: number;
};

export type NeuralEngineOptions = {
  density?: number; // 0..1 controls node count
  speed?: number; // 0..2 speed multiplier
  interactive?: boolean;
  decay?: number; // energy decay
};

export type NeuralStateSnapshot = {
  nodes: NeuralNode[];
  pulses: NeuralPulse[];
};

type Subscriber = (state: NeuralStateSnapshot) => void;

export class NeuralEngine {
  private nodes: NeuralNode[] = [];
  private pulses: NeuralPulse[] = [];
  private subscribers: Subscriber[] = [];
  private running = false;
  private frame = 0;
  private options: Required<NeuralEngineOptions> = {
    density: 0.6,
    speed: 1,
    interactive: true,
    decay: 0.01,
  };
  private raf?: number;
  private area = { w: 1200, h: 800 };

  constructor(options: NeuralEngineOptions = {}) {
    this.options = { ...this.options, ...options };
    this.seed();
  }

  private seed() {
    const count = Math.max(12, Math.floor(80 * this.options.density));
    this.nodes = Array.from({ length: count }).map(() => ({
      x: Math.random() * this.area.w,
      y: Math.random() * this.area.h,
      vx: (Math.random() - 0.5) * this.options.speed,
      vy: (Math.random() - 0.5) * this.options.speed,
      energy: Math.random(),
    }));
  }

  setSize(width: number, height: number) {
    this.area = { w: width, h: height };
  }

  setInteractive(value: boolean) {
    this.options.interactive = value;
  }

  start() {
    if (this.running) return;
    this.running = true;
    const loop = () => {
      this.step();
      this.raf = window.requestAnimationFrame(loop);
    };
    this.raf = window.requestAnimationFrame(loop);
  }

  stop() {
    this.running = false;
    if (this.raf) window.cancelAnimationFrame(this.raf);
  }

  subscribe(fn: Subscriber) {
    this.subscribers.push(fn);
    fn({ nodes: this.nodes, pulses: this.pulses });
    return () => {
      this.subscribers = this.subscribers.filter((s) => s !== fn);
    };
  }

  private emit() {
    const snapshot: NeuralStateSnapshot = {
      nodes: [...this.nodes],
      pulses: [...this.pulses],
    };
    this.subscribers.forEach((s) => s(snapshot));
  }

  pulse(point: { x: number; y: number }) {
    this.pulses.push({ x: point.x, y: point.y, life: 1 });
    this.nodes.forEach((n) => {
      const dx = n.x - point.x;
      const dy = n.y - point.y;
      const dist = Math.hypot(dx, dy);
      const force = Math.max(0, 1 - dist / 200);
      n.vx += (dx / (dist + 0.001)) * force * 0.5;
      n.vy += (dy / (dist + 0.001)) * force * 0.5;
      n.energy = Math.min(1, n.energy + force);
    });
  }

  disperse() {
    this.nodes.forEach((n) => {
      n.vx += (Math.random() - 0.5) * 2;
      n.vy += (Math.random() - 0.5) * 2;
    });
  }

  private step() {
    const { speed, decay } = this.options;
    this.frame++;

    this.nodes.forEach((n) => {
      n.x += n.vx * speed;
      n.y += n.vy * speed;
      n.vx *= 0.99;
      n.vy *= 0.99;
      n.energy = Math.max(0, n.energy - decay);

      if (n.x < 0 || n.x > this.area.w) n.vx *= -1;
      if (n.y < 0 || n.y > this.area.h) n.vy *= -1;
      n.x = Math.max(0, Math.min(this.area.w, n.x));
      n.y = Math.max(0, Math.min(this.area.h, n.y));
    });

    this.pulses = this.pulses
      .map((p) => ({ ...p, life: p.life - 0.01 }))
      .filter((p) => p.life > 0);

    if (this.frame % 3 === 0) this.emit();
  }
}
