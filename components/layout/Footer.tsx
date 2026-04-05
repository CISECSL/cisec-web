import Link from "next/link";
import Image from "next/image";

const footerSections = [
  {
    title: "Servicios",
    links: [
      { name: "Pentesting Web", href: "/servicios/pentesting-web" },
      { name: "Pentesting Infraestructura", href: "/servicios/pentesting-infraestructura" },
      { name: "Auditoría ENS", href: "/servicios/cumplimiento-ens" },
      { name: "Respuesta a Incidentes", href: "/servicios/respuesta-incidentes" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { name: "Sobre nosotros", href: "/sobre-nosotros" },
      { name: "Blog", href: "/blog" },
      { name: "Contacto", href: "/contacto" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Política de privacidad", href: "/privacidad" },
      { name: "Política de cookies", href: "/cookies" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/logo-cisec.png" alt="CISEC" width={28} height={28} className="h-7 w-7" />
              <span className="text-xl font-bold text-foreground">CISEC</span>
            </Link>
            <p className="mt-3 text-sm text-muted-foreground">
              Consultoría de Inteligencia y Securización SL. Pentesting manual por expertos certificados.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">Las Rozas, Madrid</p>
            <a href="mailto:info@cisec.es" className="mt-1 block text-sm text-primary hover:underline">
              info@cisec.es
            </a>
          </div>
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-foreground">{section.title}</h3>
              <ul className="mt-3 space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} CISEC - Consultoría de Inteligencia y Securización SL. Todos los derechos reservados.
          </p>
          <a
            href="https://www.linkedin.com/company/cisec-sl/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted-foreground hover:text-foreground"
            aria-label="LinkedIn de Álvaro Morales"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
