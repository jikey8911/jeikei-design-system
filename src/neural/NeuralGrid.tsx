import React, { useEffect, useRef } from 'react';
import { NeuralEngine, NeuralEngineOptions, NeuralStateSnapshot } from './NeuralEngine';
import { cx } from '../utils/cx';

export type NeuralGridProps = NeuralEngineOptions & {
  interactive?: boolean;
  className?: string;
  density?: number;
  speed?: number;
};

export const NeuralGrid: React.FC<NeuralGridProps> = ({
  interactive = true,
  density = 0.6,
  speed = 1,
  decay = 0.01,
  className,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const engineRef = useRef<NeuralEngine>();
  const snapshotRef = useRef<NeuralStateSnapshot>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const engine = new NeuralEngine({ density, speed, interactive, decay });
    engineRef.current = engine;

    const resize = () => {
      const { clientWidth, clientHeight } = canvas.parentElement ?? { clientWidth: 1200, clientHeight: 800 };
      canvas.width = clientWidth;
      canvas.height = clientHeight;
      engine.setSize(clientWidth, clientHeight);
    };
    resize();

    const unsub = engine.subscribe((snap) => {
      snapshotRef.current = snap;
    });
    engine.start();

    const render = () => {
      const snap = snapshotRef.current;
      if (canvas && snap) {
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#05070a';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = 'rgba(32, 246, 184, 0.5)';
        ctx.lineWidth = 1;

        // connections
        for (let i = 0; i < snap.nodes.length; i++) {
          for (let j = i + 1; j < snap.nodes.length; j++) {
            const a = snap.nodes[i];
            const b = snap.nodes[j];
            const dist = Math.hypot(a.x - b.x, a.y - b.y);
            if (dist < 220) {
              ctx.globalAlpha = 1 - dist / 220;
              ctx.beginPath();
              ctx.moveTo(a.x, a.y);
              ctx.lineTo(b.x, b.y);
              ctx.stroke();
            }
          }
        }

        // nodes
        snap.nodes.forEach((n) => {
          const glow = Math.min(1, n.energy + 0.2);
          const radius = 3 + n.energy * 3;
          const gradient = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, radius * 4);
          gradient.addColorStop(0, `rgba(0,255,156,${glow})`);
          gradient.addColorStop(1, 'rgba(0,255,156,0)');
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(n.x, n.y, radius * 2.5, 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle = '#00ff9c';
          ctx.beginPath();
          ctx.arc(n.x, n.y, radius, 0, Math.PI * 2);
          ctx.fill();
        });

        // pulses
        snap.pulses.forEach((p) => {
          ctx.strokeStyle = `rgba(0,255,156,${p.life})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, (1 - p.life) * 200, 0, Math.PI * 2);
          ctx.stroke();
        });
      }
      requestAnimationFrame(render);
    };
    requestAnimationFrame(render);

    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
      unsub();
      engine.stop();
    };
  }, [density, speed, interactive, decay]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const handler = (e: MouseEvent) => {
      if (!interactive) return;
      const rect = canvas.getBoundingClientRect();
      engineRef.current?.pulse({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };
    canvas.addEventListener('click', handler);
    return () => canvas.removeEventListener('click', handler);
  }, [interactive]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === ' ') engineRef.current?.disperse();
      if (e.key === 'Enter') engineRef.current?.pulse({ x: Math.random() * 600, y: Math.random() * 400 });
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  return <canvas ref={canvasRef} className={cx('w-full h-full absolute inset-0', className)} />;
};
