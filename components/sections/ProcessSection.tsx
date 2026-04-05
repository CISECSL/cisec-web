import { FadeContent } from "@/components/ui/FadeContent";

interface ProcessStep {
  title: string;
  description: string;
}

interface ProcessSectionProps {
  title?: string;
  steps: ProcessStep[];
}

export function ProcessSection({ title = "Nuestra metodología", steps }: ProcessSectionProps) {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold sm:text-3xl">{title}</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <FadeContent key={step.title} delay={i * 100}>
              <div className="relative pl-12">
                <div className="absolute left-0 top-0 flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  {i + 1}
                </div>
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
              </div>
            </FadeContent>
          ))}
        </div>
      </div>
    </section>
  );
}
