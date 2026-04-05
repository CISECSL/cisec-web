import { FadeContent } from "@/components/ui/FadeContent";

const stats = [
  { value: "50+", label: "Pentests realizados" },
  { value: "15+", label: "CVEs descubiertas" },
  { value: "0", label: "Datos comprometidos de nuestros clientes" },
];

export function StatsSection() {
  return (
    <section className="border-y border-border bg-card/50 py-20">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:grid-cols-3 sm:px-6 lg:px-8">
        {stats.map((stat, i) => (
          <FadeContent key={stat.label} delay={i * 150} className="text-center">
            <div className="text-5xl font-extrabold tracking-tight text-primary sm:text-6xl">{stat.value}</div>
            <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
          </FadeContent>
        ))}
      </div>
    </section>
  );
}
