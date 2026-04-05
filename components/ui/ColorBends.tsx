"use client";

import { useEffect, useRef } from "react";

interface GridBackgroundProps {
  className?: string;
}

export function ColorBends({ className }: GridBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;
    const particles: { x: number; y: number; vx: number; vy: number; life: number }[] = [];

    function resize() {
      if (!canvas) return;
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
    }

    function draw() {
      if (!canvas || !ctx) return;
      const w = canvas.width;
      const h = canvas.height;
      time += 0.01;

      // Dark background with slight fade (trail effect)
      ctx.fillStyle = "rgba(10, 10, 10, 0.15)";
      ctx.fillRect(0, 0, w, h);

      // Grid lines
      ctx.strokeStyle = "rgba(185, 28, 28, 0.04)";
      ctx.lineWidth = 1;
      const gridSize = 60 * window.devicePixelRatio;
      for (let x = 0; x < w; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y < h; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      // Spawn particles
      if (Math.random() < 0.3) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          life: 1,
        });
      }

      // Draw and update particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life -= 0.008;

        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, 2 * window.devicePixelRatio, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(185, 28, 28, ${p.life * 0.6})`;
        ctx.fill();

        // Connection lines between close particles
        for (let j = i - 1; j >= Math.max(0, i - 10); j--) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150 * window.devicePixelRatio) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(185, 28, 28, ${(1 - dist / (150 * window.devicePixelRatio)) * p.life * 0.2})`;
            ctx.stroke();
          }
        }
      }

      // Limit particles
      if (particles.length > 100) particles.splice(0, particles.length - 100);

      // Scanning line effect
      const scanY = (time * 80) % h;
      const scanGradient = ctx.createLinearGradient(0, scanY - 20, 0, scanY + 20);
      scanGradient.addColorStop(0, "rgba(185, 28, 28, 0)");
      scanGradient.addColorStop(0.5, "rgba(185, 28, 28, 0.06)");
      scanGradient.addColorStop(1, "rgba(185, 28, 28, 0)");
      ctx.fillStyle = scanGradient;
      ctx.fillRect(0, scanY - 20, w, 40);

      animationId = requestAnimationFrame(draw);
    }

    resize();
    // Clear canvas fully on first frame
    ctx.fillStyle = "#0a0a0a";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    draw();
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 h-full w-full ${className ?? ""}`}
      aria-hidden="true"
    />
  );
}
