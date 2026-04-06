"use client";

import { useRef, useState, useEffect } from "react";
import { MagneticCard } from "@/components/ui/MagneticCard";

const cases = [
  {
    tag: "Pentest",
    title: "Auditoría a bodega española",
    description:
      "Durante un pentest de infraestructura, descubrimos la CVE-2024-1709 (ScreenConnect) que permitía acceso remoto no autorizado a sistemas críticos de producción. Remediación completada antes de cualquier explotación.",
    result: "CVE crítica detectada y remediada",
  },
  {
    tag: "Incidente",
    title: "Respuesta a incidente en startup logística",
    description:
      "Credenciales de GCP comprometidas mediante phishing dirigido. Contención en menos de 4 horas, análisis forense completo y hardening de entorno cloud post-incidente.",
    result: "Contención en <4h, 0 datos exfiltrados",
  },
];

export function CaseStudiesSection() {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          className="text-center"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          Casos de éxito
        </h2>
        <p
          className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s",
          }}
        >
          Resultados reales de nuestros servicios. Nombres anonimizados por confidencialidad.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {cases.map((c, i) => (
            <MagneticCard key={c.title}>
              <div
                className="rounded-xl border border-border bg-card p-8 transition-all duration-500 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
                style={{
                  opacity: isVisible ? 1 : 0,
                  clipPath: isVisible ? "inset(0% 0 0 0)" : "inset(100% 0 0 0)",
                  transform: isVisible ? "translateY(0)" : "translateY(40px)",
                  transition: `opacity 1s cubic-bezier(0.16, 1, 0.3, 1) ${0.2 + i * 0.2}s, clip-path 1s cubic-bezier(0.16, 1, 0.3, 1) ${0.2 + i * 0.2}s, transform 1s cubic-bezier(0.16, 1, 0.3, 1) ${0.2 + i * 0.2}s`,
                }}
              >
                <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  {c.tag}
                </span>
                <h3 className="mt-4 text-lg font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.description}</p>
                <div className="mt-4 border-t border-border pt-4">
                  <span className="text-sm font-medium text-primary">✓ {c.result}</span>
                </div>
              </div>
            </MagneticCard>
          ))}
        </div>
      </div>
    </section>
  );
}
