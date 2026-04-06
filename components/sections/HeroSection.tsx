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

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // 1. Fade in ColorBends background
      tl.fromTo(
        sectionRef.current.querySelector("[data-hero-bg]"),
        { opacity: 0 },
        { opacity: 1, duration: 1.5 }
      );

      // 2. Animate the headline container
      tl.fromTo(
        sectionRef.current.querySelector("[data-hero-headline]"),
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        "-=0.8"
      );

      // 3. Animate the subtitle
      tl.fromTo(
        sectionRef.current.querySelector("[data-hero-subtitle]"),
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.6"
      );

      // 4. Animate the CTAs
      tl.fromTo(
        sectionRef.current.querySelectorAll("[data-hero-cta]"),
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.15 },
        "-=0.4"
      );

      // Parallax on scroll
      gsap.to(sectionRef.current.querySelector("[data-hero-content]"), {
        yPercent: -15,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[85vh] items-center overflow-hidden"
    >
      <div data-hero-bg>
        <ColorBends />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      <div data-hero-content className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <h1
          data-hero-headline
          className="max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
          style={{ willChange: "transform" }}
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
          data-hero-subtitle
          className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl"
          style={{ willChange: "transform" }}
        >
          <BlurText
            text="Pentesting manual por expertos certificados OSCP. Para empresas que no pueden permitirse una brecha de seguridad."
            delay={400}
          />
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/contacto"
            data-hero-cta
            className={buttonVariants({ size: "lg" })}
            style={{ willChange: "transform" }}
          >
            Solicita presupuesto gratuito
          </Link>
          <a
            href="#servicios"
            data-hero-cta
            className={buttonVariants({ variant: "outline", size: "lg" })}
            style={{ willChange: "transform" }}
          >
            Ver servicios
          </a>
        </div>
      </div>
    </section>
  );
}
