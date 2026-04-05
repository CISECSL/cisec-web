"use client";

import { useEffect, useRef } from "react";

interface ColorBendsProps {
  className?: string;
}

export function ColorBends({ className }: ColorBendsProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    function resize() {
      if (!canvas) return;
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
    }

    function draw() {
      if (!canvas || !ctx) return;
      const w = canvas.width;
      const h = canvas.height;
      time += 0.003;

      const gradient = ctx.createLinearGradient(
        w * (0.3 + 0.2 * Math.sin(time)),
        0,
        w * (0.7 + 0.2 * Math.cos(time * 0.7)),
        h
      );
      gradient.addColorStop(0, "#0a0a0a");
      gradient.addColorStop(0.3, "rgba(0, 212, 255, 0.15)");
      gradient.addColorStop(0.6, "rgba(124, 58, 237, 0.1)");
      gradient.addColorStop(1, "#0a0a0a");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, w, h);

      animationId = requestAnimationFrame(draw);
    }

    resize();
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
