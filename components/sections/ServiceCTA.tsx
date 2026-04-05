import Link from "next/link";

export function ServiceCTA() {
  return (
    <section className="border-t border-border bg-card/50 py-16">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold sm:text-3xl">¿Listo para proteger tu empresa?</h2>
        <p className="mt-4 text-muted-foreground">
          Solicita un presupuesto sin compromiso. Te responderemos en menos de 24 horas.
        </p>
        <Link
          href="/contacto"
          className="mt-6 inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Solicita presupuesto gratuito
        </Link>
      </div>
    </section>
  );
}
