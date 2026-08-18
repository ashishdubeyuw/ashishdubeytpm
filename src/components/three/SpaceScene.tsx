import { useEffect, useRef } from 'react';

const WhiteboardScene = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let raf: number;
    let isVisible = !document.hidden;

    const resize = () => {
      canvas.width = Math.min(window.innerWidth, 1920);
      canvas.height = Math.min(window.innerHeight, 1080);
      generateLines();
      if (isVisible) {
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(draw);
      }
    };

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
      const count = Math.floor((w * h) / 90000);

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
          speed: 0.008 + Math.random() * 0.012,
          color: colors[Math.floor(Math.random() * colors.length)],
          width: 1 + Math.random() * 2.5,
        });
      }
    };

    resize();
    window.addEventListener('resize', resize);

    const handleVisibility = () => {
      isVisible = !document.hidden;
      if (isVisible) {
        raf = requestAnimationFrame(draw);
      } else {
        cancelAnimationFrame(raf);
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);

    const draw = () => {
      if (!isVisible) return;
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

      // Once all lines finish drawing, the loop halts completely -> 0% CPU
      if (!allDone) {
        raf = requestAnimationFrame(draw);
      }
    };

    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.7 }}
    />
  );
};

export default WhiteboardScene;
