import { Breadcrumb } from "@/components/layout/Breadcrumb";

interface ServiceHeroProps {
  title: string;
  description: string;
  breadcrumbItems: { name: string; href: string }[];
}

export function ServiceHero({ title, description, breadcrumbItems }: ServiceHeroProps) {
  return (
    <section className="pb-8 pt-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={breadcrumbItems} />
        <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">{title}</h1>
        <p className="mt-4 max-w-3xl text-lg text-muted-foreground">{description}</p>
      </div>
    </section>
  );
}
