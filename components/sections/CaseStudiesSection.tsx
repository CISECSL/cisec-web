"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { MagneticCard } from "@/components/ui/MagneticCard";

gsap.registerPlugin(ScrollTrigger);

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
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      // Title animation
      gsap.fromTo(
        containerRef.current.querySelector("h2"),
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Subtitle animation
      gsap.fromTo(
        containerRef.current.querySelector("[data-cases-subtitle]"),
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Cards clip-path reveal
      gsap.fromTo(
        containerRef.current.querySelectorAll("[data-case-card]"),
        {
          clipPath: "inset(100% 0 0 0)",
          y: 40,
          opacity: 0,
        },
        {
          clipPath: "inset(0% 0 0 0)",
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: containerRef.current.querySelector("[data-cases-grid]"),
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          className="text-center text-3xl font-bold sm:text-4xl"
          style={{ willChange: "transform" }}
        >
          Casos de éxito
        </h2>
        <p
          data-cases-subtitle
          className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground"
          style={{ willChange: "transform" }}
        >
          Resultados reales de nuestros servicios. Nombres anonimizados por
          confidencialidad.
        </p>
        <div data-cases-grid className="mt-12 grid gap-6 md:grid-cols-2">
          {cases.map((c) => (
            <MagneticCard key={c.title}>
              <div
                data-case-card
                className="rounded-xl border border-border bg-card p-8 transition-all duration-500 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
                style={{ willChange: "transform" }}
              >
                <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  {c.tag}
                </span>
                <h3 className="mt-4 text-lg font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {c.description}
                </p>
                <div className="mt-4 border-t border-border pt-4">
                  <span className="text-sm font-medium text-primary">
                    &#10003; {c.result}
                  </span>
                </div>
              </div>
            </MagneticCard>
          ))}
        </div>
      </div>
    </section>
  );
}
