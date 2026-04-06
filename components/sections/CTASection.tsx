"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      // Parallax on the gradient background
      gsap.to(sectionRef.current.querySelector("[data-gradient]"), {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Text reveal
      gsap.fromTo(
        sectionRef.current.querySelectorAll("[data-cta-content] > *"),
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-28">
      <div
        data-gradient
        className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"
      />
      <div
        data-cta-content
        className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8"
      >
        <h2
          className="text-3xl font-bold sm:text-4xl"
          style={{ willChange: "transform" }}
        >
          Protege tu empresa antes de que sea tarde
        </h2>
        <p
          className="mt-4 text-lg text-muted-foreground"
          style={{ willChange: "transform" }}
        >
          El 60% de las pymes que sufren un ciberataque grave cierran en los
          siguientes 6 meses. No seas una estadística. Solicita una auditoría de
          seguridad y conoce el estado real de tus sistemas.
        </p>
        <Link
          href="/contacto"
          className="mt-8 inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          style={{ willChange: "transform" }}
        >
          Solicita presupuesto gratuito
        </Link>
      </div>
    </section>
  );
}
