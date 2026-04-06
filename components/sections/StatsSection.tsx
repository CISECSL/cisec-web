"use client";

import { useRef, useState, useEffect, useCallback } from "react";

const stats = [
  { value: 50, suffix: "+", label: "Pentests realizados" },
  { value: 15, suffix: "+", label: "CVEs descubiertas" },
  { value: 0, suffix: "", label: "Datos comprometidos de nuestros clientes" },
];

export function StatsSection() {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const hasAnimated = useRef(false);

  const animateCounters = useCallback(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    const duration = 2000;
    const start = performance.now();

    function tick(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out quad
      const eased = 1 - (1 - progress) * (1 - progress);

      setCounts(stats.map((s) => Math.round(s.value * eased)));

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    }

    requestAnimationFrame(tick);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          animateCounters();
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [animateCounters]);

  return (
    <section ref={ref} className="border-y border-border bg-card/50 py-20">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:grid-cols-3 sm:px-6 lg:px-8">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className="text-center"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0) scale(1)" : "translateY(30px) scale(0.85)",
              transition: `opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.15}s, transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${i * 0.15}s`,
            }}
          >
            <div className="text-5xl font-extrabold tracking-tight text-primary sm:text-6xl">
              {counts[i]}{stat.suffix}
            </div>
            <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
