import { FadeContent } from "@/components/ui/FadeContent";

const cases = [
  {
    tag: "Pentest",
    title: "Auditoría a bodega española",
    description: "Durante un pentest de infraestructura, descubrimos la CVE-2024-1709 (ScreenConnect) que permitía acceso remoto no autorizado a sistemas críticos de producción. Remediación completada antes de cualquier explotación.",
    result: "CVE crítica detectada y remediada",
  },
  {
    tag: "Incidente",
    title: "Respuesta a incidente en startup logística",
    description: "Credenciales de GCP comprometidas mediante phishing dirigido. Contención en menos de 4 horas, análisis forense completo y hardening de entorno cloud post-incidente.",
    result: "Contención en <4h, 0 datos exfiltrados",
  },
];

export function CaseStudiesSection() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeContent>
          <h2 className="text-center text-3xl font-bold sm:text-4xl">Casos de éxito</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
            Resultados reales de nuestros servicios. Nombres anonimizados por confidencialidad.
          </p>
        </FadeContent>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {cases.map((c, i) => (
            <FadeContent key={c.title} delay={i * 150}>
              <div className="rounded-xl border border-border bg-card p-8 transition-all duration-500 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">{c.tag}</span>
                <h3 className="mt-4 text-lg font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.description}</p>
                <div className="mt-4 border-t border-border pt-4">
                  <span className="text-sm font-medium text-primary">✓ {c.result}</span>
                </div>
              </div>
            </FadeContent>
          ))}
        </div>
      </div>
    </section>
  );
}
