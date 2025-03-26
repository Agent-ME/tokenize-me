'use client';

import { useEffect, useRef } from 'react';

const GraphPaper = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const container = canvas.parentElement;
      if (!container) return;

      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;

      // Draw grid
      const minorGridSize = 40;
      const majorGridSize = minorGridSize * 5;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw minor grid lines
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(0, 0, 255, 0.05)';
      ctx.lineWidth = 1;

      for (let x = 0; x <= canvas.width; x += minorGridSize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
      }

      for (let y = 0; y <= canvas.height; y += minorGridSize) {
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
      }
      ctx.stroke();

      // Draw major grid lines
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(0, 0, 255, 0.1)';
      ctx.lineWidth = 1;

      for (let x = 0; x <= canvas.width; x += majorGridSize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
      }

      for (let y = 0; y <= canvas.height; y += majorGridSize) {
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
      }
      ctx.stroke();
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.5 }}
    />
  );
};

export default GraphPaper; 