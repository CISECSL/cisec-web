"use client";

import Link from "next/link";
import DecryptedText from "@/components/ui/DecryptedText";
import { BlurText } from "@/components/ui/BlurText";
import { buttonVariants } from "@/components/ui/button";
import { ColorBends } from "@/components/ui/ColorBends";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden">
      <ColorBends />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
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
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
          <BlurText
            text="Pentesting manual por expertos certificados OSCP. Para empresas que no pueden permitirse una brecha de seguridad."
            delay={400}
          />
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link href="/contacto" className={buttonVariants({ size: "lg" })}>
            Solicita presupuesto gratuito
          </Link>
          <a href="#servicios" className={buttonVariants({ variant: "outline", size: "lg" })}>
            Ver servicios
          </a>
        </div>
      </div>
    </section>
  );
}
