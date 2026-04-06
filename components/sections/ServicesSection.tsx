"use client";

import { useRef } from "react";
import Link from "next/link";
import { Shield, Server, FileCheck, AlertTriangle } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Shield,
    title: "Pentesting Web",
    description:
      "Auditoría manual de aplicaciones web siguiendo OWASP Top 10 y PTES. Detectamos lo que los scanners no ven.",
    price: "Desde 3.500\u20ac",
    href: "/servicios/pentesting-web",
  },
  {
    icon: Server,
    title: "Pentesting Infraestructura",
    description:
      "Evaluación de seguridad de redes, servidores y entornos cloud (AWS, GCP, Azure). Interno y externo.",
    price: "Desde 4.000\u20ac",
    href: "/servicios/pentesting-infraestructura",
  },
  {
    icon: FileCheck,
    title: "Auditoría ENS",
    description:
      "Cumplimiento del Esquema Nacional de Seguridad. Gap analysis, auditoría técnica y acompañamiento.",
    price: "Consultar",
    href: "/servicios/cumplimiento-ens",
  },
  {
    icon: AlertTriangle,
    title: "Respuesta a Incidentes",
    description:
      "Contención, erradicación y forensic ante incidentes de ciberseguridad. Respuesta inicial en menos de 2 horas.",
    price: "Urgente 24h",
    href: "/servicios/respuesta-incidentes",
  },
];

export function ServicesSection() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      // Title animation
      gsap.from(containerRef.current.querySelector("h2"), {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });

      // Subtitle animation
      gsap.from(containerRef.current.querySelector("[data-service-subtitle]"), {
        y: 20,
        opacity: 0,
        duration: 0.8,
        delay: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });

      // Cards stagger
      gsap.from(
        containerRef.current.querySelectorAll("[data-service-card]"),
        {
          y: 60,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current.querySelector(
              "[data-service-grid]"
            ),
            start: "top 85%",
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} id="servicios" className="py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          className="text-center text-3xl font-bold sm:text-4xl"
          style={{ willChange: "transform" }}
        >
          Servicios de Ciberseguridad
        </h2>
        <p
          data-service-subtitle
          className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground"
          style={{ willChange: "transform" }}
        >
          Pentesting manual realizado por expertos certificados. Sin
          automatismos genéricos, sin falsos positivos.
        </p>
        <div data-service-grid className="mt-12 grid gap-6 sm:grid-cols-2">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              data-service-card
              className="group block rounded-xl border border-border bg-card p-6 transition-all duration-500 ease-[cubic-bezier(0,1,0.5,1)] hover:border-primary/50 hover:bg-card/80 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
              style={{ willChange: "transform" }}
            >
              <service.icon
                className="h-8 w-8 text-primary"
                aria-hidden="true"
              />
              <h3 className="mt-4 text-xl font-semibold">{service.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {service.description}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm font-medium text-primary">
                  {service.price}
                </span>
                <span className="text-sm text-muted-foreground transition-colors group-hover:text-foreground">
                  Saber más &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
