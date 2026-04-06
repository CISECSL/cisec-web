import Link from "next/link";
import { FadeContent } from "@/components/ui/FadeContent";

export function CTASection() {
  return (
    <section className="relative overflow-hidden py-28">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <FadeContent>
          <h2 className="text-3xl font-bold sm:text-4xl">Protege tu empresa antes de que sea tarde</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            El 60% de las pymes que sufren un ciberataque grave cierran en los siguientes 6 meses.
            No seas una estadística. Solicita una auditoría de seguridad y conoce el estado real de tus sistemas.
          </p>
          <Link
            href="/contacto"
            className="mt-8 inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/80"
          >
            Solicita presupuesto gratuito
          </Link>
        </FadeContent>
      </div>
    </section>
  );
}
