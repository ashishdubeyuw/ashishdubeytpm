import { useEffect, useRef } from 'react';

const WhiteboardScene = () => {
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
    window.addEventListener('resize', resize);

    const lines: { x1: number; y1: number; x2: number; y2: number; progress: number; speed: number; color: string; width: number }[] = [];

    const colors = [
      'hsla(207, 62%, 28%, 0.06)',
      'hsla(210, 16%, 22%, 0.04)',
      'hsla(4, 64%, 48%, 0.03)',
      'hsla(210, 10%, 60%, 0.05)',
    ];

    const generateLines = () => {
      lines.length = 0;
      const w = canvas.width;
      const h = canvas.height;
      const count = Math.floor((w * h) / 80000);

      for (let i = 0; i < count; i++) {
        const isHoriz = Math.random() > 0.4;
        const x1 = Math.random() * w;
        const y1 = Math.random() * h;
        const len = 60 + Math.random() * 200;

        lines.push({
          x1,
          y1,
          x2: isHoriz ? x1 + len : x1 + (Math.random() - 0.5) * 30,
          y2: isHoriz ? y1 + (Math.random() - 0.5) * 20 : y1 + len,
          progress: 0,
          speed: 0.003 + Math.random() * 0.008,
          color: colors[Math.floor(Math.random() * colors.length)],
          width: 1 + Math.random() * 2.5,
        });
      }
    };
    generateLines();

    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      let allDone = true;
      for (const l of lines) {
        if (l.progress < 1) {
          l.progress = Math.min(1, l.progress + l.speed);
          allDone = false;
        }
        const cx = l.x1 + (l.x2 - l.x1) * l.progress;
        const cy = l.y1 + (l.y2 - l.y1) * l.progress;

        ctx.beginPath();
        ctx.moveTo(l.x1, l.y1);
        ctx.lineTo(cx, cy);
        ctx.strokeStyle = l.color;
        ctx.lineWidth = l.width;
        ctx.lineCap = 'round';
        ctx.stroke();
      }

      if (!allDone) {
        raf = requestAnimationFrame(draw);
      }
    };
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ opacity: 0.7 }}
    />
  );
};

export default WhiteboardScene;
