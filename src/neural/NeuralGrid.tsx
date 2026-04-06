import { useEffect, useRef } from 'react';

export const NeuralGrid = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();

    let points = Array.from({ length: 180 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = 'lighter';

      // connections
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const a = points[i];
          const b = points[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < 190) {
            const alpha = 1 - dist / 190;
            ctx.strokeStyle = `rgba(0, 200, 255, ${alpha * 0.25})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // stars
      points.forEach((p) => {
        ctx.beginPath();
        const r = 1.2 + Math.random() * 0.9;
        const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r * 7);
        grd.addColorStop(0, 'rgba(0,255,255,0.8)');
        grd.addColorStop(1, 'rgba(0,255,255,0)');
        ctx.fillStyle = grd;
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      });

      requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resize);
    draw();
    return () => window.removeEventListener('resize', resize);
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10 opacity-30 pointer-events-none" />;
};
