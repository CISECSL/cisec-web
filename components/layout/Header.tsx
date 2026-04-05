"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

const servicios = [
  { name: "Pentesting Web", href: "/servicios/pentesting-web" },
  { name: "Pentesting Infraestructura", href: "/servicios/pentesting-infraestructura" },
  { name: "Auditoría ENS", href: "/servicios/cumplimiento-ens" },
  { name: "Respuesta a Incidentes", href: "/servicios/respuesta-incidentes" },
];

const navLinks = [
  { name: "Blog", href: "/blog" },
  { name: "Sobre nosotros", href: "/sobre-nosotros" },
  { name: "Contacto", href: "/contacto" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [serviciosOpen, setServiciosOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo-cisec.png"
            alt="CISEC"
            width={32}
            height={32}
            className="h-8 w-8 invert"
          />
          <span className="text-xl font-bold tracking-tight text-foreground">CISEC</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 md:flex">
          <div className="relative">
            <button
              onClick={() => setServiciosOpen(!serviciosOpen)}
              onBlur={() => setTimeout(() => setServiciosOpen(false), 150)}
              className="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Servicios
              <ChevronDown className="h-4 w-4" />
            </button>
            {serviciosOpen && (
              <div className="absolute left-0 top-full mt-2 w-64 rounded-lg border border-border bg-card p-2 shadow-xl">
                {servicios.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="block rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.name}
            </Link>
          ))}

          <Link href="/contacto" className={buttonVariants()}>
            Solicitar presupuesto
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden"
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-border bg-background px-4 py-4 md:hidden">
          <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Servicios
          </div>
          {servicios.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-sm text-muted-foreground hover:text-foreground"
            >
              {s.name}
            </Link>
          ))}
          <div className="my-3 border-t border-border" />
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-sm text-muted-foreground hover:text-foreground"
            >
              {link.name}
            </Link>
          ))}
          <Link href="/contacto" className={buttonVariants({ className: "mt-4 w-full" })}>
            Solicitar presupuesto
          </Link>
        </div>
      )}
    </header>
  );
}
