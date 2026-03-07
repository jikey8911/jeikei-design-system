import React, { useEffect, useRef } from 'react';
import { NeuralEngine } from './NeuralEngine';

export interface NeuralGridProps {
  sparkles?: boolean;
  gridSize?: number;
  pulseInterval?: number;
  className?: string;
}

export const NeuralGrid: React.FC<NeuralGridProps> = ({
  sparkles = true,
  gridSize = 80,
  pulseInterval = 500,
  className = "",
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const engine = new NeuralEngine(width, height, gridSize);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      engine.init(width, height);
    };

    window.addEventListener('resize', handleResize);

    let animationFrameId: number;
    let lastPulseTime = 0;

    const render = (time: number) => {
      ctx.clearRect(0, 0, width, height);

      // Draw Grid lines (subtle)
      ctx.strokeStyle = "rgba(0, 255, 156, 0.05)";
      ctx.lineWidth = 1;

      for (let x = 0; x <= width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y <= height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw Nodes
      ctx.fillStyle = "rgba(0, 255, 156, 0.2)";
      engine.nodes.forEach(node => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, 1.5, 0, Math.PI * 2);
        ctx.fill();
      });

      if (sparkles) {
        if (time - lastPulseTime > pulseInterval) {
          engine.createPulse();
          lastPulseTime = time;
        }

        engine.update();

        // Draw Pulses
        engine.pulses.forEach(p => {
          const currentX = p.from.x + (p.to.x - p.from.x) * p.progress;
          const currentY = p.from.y + (p.to.y - p.from.y) * p.progress;

          const gradient = ctx.createRadialGradient(currentX, currentY, 0, currentX, currentY, 4);
          gradient.addColorStop(0, "rgba(0, 255, 225, 1)");
          gradient.addColorStop(1, "rgba(0, 255, 225, 0)");

          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(currentX, currentY, 4, 0, Math.PI * 2);
          ctx.fill();

          // Glow effect
          ctx.shadowBlur = 10;
          ctx.shadowColor = "rgba(0, 255, 225, 0.8)";
          ctx.beginPath();
          ctx.arc(currentX, currentY, 2, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;
        });
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [sparkles, gridSize, pulseInterval]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-0 bg-[#05070a] ${className}`}
    />
  );
};
