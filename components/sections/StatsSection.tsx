"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 50, suffix: "+", label: "Pentests realizados" },
  { value: 15, suffix: "+", label: "CVEs descubiertas" },
  { value: 0, suffix: "", label: "Datos comprometidos de nuestros clientes" },
];

export function StatsSection() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      // Animate each stat number
      const numbers =
        containerRef.current.querySelectorAll("[data-stat-value]");
      numbers.forEach((el) => {
        const target = parseInt(el.getAttribute("data-stat-value") || "0");
        const suffix = el.getAttribute("data-stat-suffix") || "";
        const obj = { val: 0 };

        gsap.to(obj, {
          val: target,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          onUpdate: () => {
            el.textContent = Math.round(obj.val) + suffix;
          },
        });
      });

      // Stagger the stat blocks
      gsap.from(containerRef.current.querySelectorAll("[data-stat]"), {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="border-y border-border bg-card/50 py-20"
    >
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:grid-cols-3 sm:px-6 lg:px-8">
        {stats.map((stat) => (
          <div key={stat.label} data-stat className="text-center">
            <div
              className="text-5xl font-extrabold tracking-tight text-primary sm:text-6xl"
              data-stat-value={stat.value}
              data-stat-suffix={stat.suffix}
            >
              {stat.value}
              {stat.suffix}
            </div>
            <div className="mt-2 text-sm text-muted-foreground">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
