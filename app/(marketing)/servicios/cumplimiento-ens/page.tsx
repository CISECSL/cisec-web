import type { Metadata } from "next";
import { serviceSchema } from "@/lib/schema";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ServiceCTA } from "@/components/sections/ServiceCTA";

export const metadata: Metadata = {
  title: "Auditoría ENS España | Esquema Nacional de Seguridad | CISEC",
  description:
    "Auditoría y consultoría para el cumplimiento del Esquema Nacional de Seguridad (ENS) en categorías MEDIA y ALTA. Adaptación a NIS2 para administraciones públicas y sus proveedores.",
  alternates: { canonical: "/servicios/cumplimiento-ens" },
};

const breadcrumbItems = [
  { name: "Servicios", href: "/servicios" },
  { name: "Cumplimiento ENS", href: "/servicios/cumplimiento-ens" },
];

const steps = [
  {
    title: "Gap Analysis",
    description:
      "Evaluamos el estado actual de tu organización frente a los controles del ENS. Identificamos las brechas entre tu postura de seguridad y los requisitos de la categoría que te corresponde (MEDIA o ALTA).",
  },
  {
    title: "Auditoría técnica",
    description:
      "Verificamos la implementación real de los controles técnicos: gestión de accesos, cifrado, monitorización, copias de seguridad, gestión de vulnerabilidades y configuración de sistemas.",
  },
  {
    title: "Plan de remediación",
    description:
      "Elaboramos un plan de acción priorizado con las medidas correctivas necesarias, plazos estimados, responsables y recursos requeridos para alcanzar el cumplimiento.",
  },
  {
    title: "Soporte a la implementación",
    description:
      "Acompañamos a tu equipo durante la implementación de las medidas correctivas. Revisamos la documentación, validamos los controles y preparamos tu organización para la certificación.",
  },
];

const faqs = [
  {
    question: "¿Quién está obligado a cumplir con el ENS?",
    answer:
      "El Esquema Nacional de Seguridad es obligatorio para todas las administraciones públicas españolas y para los proveedores tecnológicos que les prestan servicios. Si tu empresa trabaja con el sector público, necesitas cumplir con el ENS en la categoría que corresponda al servicio que prestas.",
  },
  {
    question: "¿Cuál es la relación entre el ENS y la directiva NIS2?",
    answer:
      "La directiva NIS2 (transpuesta en España como Ley de Ciberseguridad) amplía las obligaciones de seguridad a sectores esenciales e importantes. El ENS actualizado (Real Decreto 311/2022) ya incorpora muchos de los requisitos de NIS2. Si cumples con el ENS en categoría ALTA, tienes una base sólida para NIS2.",
  },
  {
    question: "¿Cuánto tiempo lleva obtener la certificación ENS?",
    answer:
      "Depende del estado de partida. Una organización con buenas prácticas de seguridad puede alcanzar la certificación en 3 a 6 meses. Si hay muchas brechas, el proceso puede extenderse a 6-12 meses. El gap analysis inicial nos permite darte una estimación realista.",
  },
  {
    question: "¿Qué categoría del ENS necesita mi organización?",
    answer:
      "La categoría (BÁSICA, MEDIA o ALTA) depende de la valoración de los activos de información que manejas y del impacto que tendría un incidente de seguridad. Para servicios con datos personales sensibles o infraestructuras críticas, normalmente se requiere categoría ALTA.",
  },
  {
    question: "¿Ofrecéis soporte continuo después de la certificación?",
    answer:
      "Sí. El ENS requiere revisiones periódicas y mejora continua. Ofrecemos planes de mantenimiento que incluyen auditorías anuales, actualización de documentación, formación al personal y soporte ante incidentes para que mantengas la conformidad de forma sostenida.",
  },
];

export default function CumplimientoENSPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: "Auditoría de Seguridad para ENS",
              description:
                "Consultoría y auditoría para el cumplimiento del Esquema Nacional de Seguridad en categorías MEDIA y ALTA. Adaptación a NIS2.",
              url: "https://cisec.es/servicios/cumplimiento-ens",
            })
          ),
        }}
      />

      <ServiceHero
        title="Auditoría de Seguridad para ENS — Esquema Nacional de Seguridad"
        description="Te ayudamos a cumplir con el Esquema Nacional de Seguridad en categorías MEDIA y ALTA. Desde el análisis de brechas hasta la preparación para la certificación, con soporte técnico durante todo el proceso."
        breadcrumbItems={breadcrumbItems}
      />

      {/* Descripción ampliada */}
      <section className="py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4 text-muted-foreground">
            <p>
              El Esquema Nacional de Seguridad (ENS), regulado por el Real Decreto 311/2022, establece
              los principios y requisitos mínimos de seguridad para la protección de la información en
              el sector público español. Su cumplimiento es obligatorio para administraciones públicas
              y para cualquier empresa que les preste servicios tecnológicos.
            </p>
            <p>
              Con la entrada en vigor de la directiva NIS2 y su transposición al ordenamiento español,
              los requisitos de ciberseguridad se extienden a sectores esenciales e importantes. Nuestro
              equipo de consultores combina experiencia técnica en pentesting con conocimiento profundo
              del marco normativo para ofrecerte un servicio integral: no solo te decimos qué debes
              cumplir, sino que verificamos técnicamente que los controles funcionan.
            </p>
          </div>
        </div>
      </section>

      <ProcessSection steps={steps} />

      {/* Precio */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg border border-border bg-card p-8 text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Precio
            </p>
            <p className="mt-2 text-4xl font-bold">Consultar</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Cada proyecto se presupuesta en función del tamaño de la organización, la categoría ENS
              y el estado actual de los controles de seguridad.
            </p>
          </div>
        </div>
      </section>

      <FAQSection items={faqs} />
      <ServiceCTA />
    </>
  );
}
