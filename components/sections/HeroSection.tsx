"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import DecryptedText from "@/components/ui/DecryptedText";
import { BlurText } from "@/components/ui/BlurText";
import { buttonVariants } from "@/components/ui/button";
import { ColorBends } from "@/components/ui/ColorBends";

gsap.registerPlugin(ScrollTrigger);

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  // GSAP only for parallax on scroll — not for entrance animations
  useGSAP(() => {
    if (!sectionRef.current) return;

    const content = sectionRef.current.querySelector("[data-hero-content]");
    if (content) {
      gsap.to(content, {
        yPercent: -15,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      });
    }
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[85vh] items-center overflow-hidden"
    >
      {/* Animated background */}
      <div className="animate-fade-in" style={{ animationDuration: "1.5s" }}>
        <ColorBends />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

      {/* Content with CSS entrance animations */}
      <div
        data-hero-content
        className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
      >
        <h1
          className="max-w-4xl"
          style={{
            opacity: 1,
            animation: "heroSlideUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both",
          }}
        >
          <DecryptedText
            text="Descubrimos las vulnerabilidades de tu empresa antes que los atacantes"
            animateOn="view"
            speed={40}
            sequential={true}
            revealDirection="start"
            className="text-foreground"
            encryptedClassName="text-primary/40"
          />
        </h1>
        <p
          className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl"
          style={{
            animation: "heroSlideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.6s both",
          }}
        >
          <BlurText
            text="Pentesting manual por expertos certificados OSCP. Para empresas que no pueden permitirse una brecha de seguridad."
            delay={400}
          />
        </p>
        <div
          className="mt-10 flex flex-col gap-4 sm:flex-row"
          style={{
            animation: "heroSlideUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.9s both",
          }}
        >
          <Link
            href="/contacto"
            className={buttonVariants({ size: "lg" })}
          >
            Solicita presupuesto gratuito
          </Link>
          <a
            href="#servicios"
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            Ver servicios
          </a>
        </div>
      </div>

      {/* CSS keyframes for hero entrance */}
      <style jsx>{`
        @keyframes heroSlideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
