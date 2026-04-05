import type { Metadata } from "next";
import { serviceSchema } from "@/lib/schema";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ServiceCTA } from "@/components/sections/ServiceCTA";

export const metadata: Metadata = {
  title: "Respuesta Incidentes Ciberseguridad | Emergencia 24h | CISEC",
  description:
    "Servicio de respuesta a incidentes de ciberseguridad con SLA inferior a 2 horas. Contención de ransomware, brechas de datos, compromisos de credenciales y ataques APT.",
  alternates: { canonical: "/servicios/respuesta-incidentes" },
};

const breadcrumbItems = [
  { name: "Servicios", href: "/servicios" },
  { name: "Respuesta a Incidentes", href: "/servicios/respuesta-incidentes" },
];

const steps = [
  {
    title: "Contención",
    description:
      "Actuamos en las primeras horas para limitar el alcance del incidente. Aislamos sistemas comprometidos, bloqueamos vectores de ataque activos y preservamos las evidencias digitales para el análisis posterior.",
  },
  {
    title: "Erradicación",
    description:
      "Identificamos la causa raíz del incidente y eliminamos la presencia del atacante: malware, backdoors, cuentas comprometidas, persistencia y cualquier artefacto malicioso en tus sistemas.",
  },
  {
    title: "Recuperación",
    description:
      "Restauramos los servicios afectados de forma segura. Verificamos la integridad de los sistemas antes de volver a producción y monitorizamos intensivamente para detectar cualquier reinfección.",
  },
  {
    title: "Análisis forense",
    description:
      "Realizamos un análisis forense completo: cronología del ataque, vector de entrada, movimiento lateral, datos afectados e indicadores de compromiso (IOCs). Entregamos un informe válido para procedimientos legales.",
  },
];

const faqs = [
  {
    question: "¿Cuál es vuestro tiempo de respuesta?",
    answer:
      "Nuestro SLA estándar es de menos de 2 horas desde la notificación del incidente. Disponemos de un equipo de guardia 24/7 que inicia la fase de contención de forma inmediata mientras se moviliza al equipo completo de respuesta.",
  },
  {
    question: "¿Qué tipos de incidentes cubrís?",
    answer:
      "Cubrimos todo tipo de incidentes de ciberseguridad: ataques de ransomware, brechas de datos, compromiso de credenciales, ataques de denegación de servicio (DDoS), compromisos de correo empresarial (BEC), amenazas persistentes avanzadas (APT) y cualquier actividad maliciosa en tus sistemas.",
  },
  {
    question: "¿Es necesario tener un contrato previo para usar el servicio?",
    answer:
      "No. Atendemos incidentes de emergencia sin necesidad de contrato previo. Sin embargo, recomendamos un acuerdo de retainer que garantiza tiempos de respuesta prioritarios y tarifas reducidas. Con un retainer, tu organización tiene un equipo de respuesta asignado y preparado.",
  },
  {
    question: "¿El informe forense sirve como prueba legal?",
    answer:
      "Sí. Nuestros informes forenses siguen la cadena de custodia y las metodologías reconocidas (RFC 3227, ISO 27037). Son válidos como evidencia en procedimientos judiciales y para la notificación obligatoria a la AEPD y al CCN-CERT.",
  },
  {
    question: "¿Ayudáis con la notificación a la AEPD y otras autoridades?",
    answer:
      "Sí. Si el incidente implica una brecha de datos personales, te asistimos en la evaluación del impacto, la redacción de la notificación a la Agencia Española de Protección de Datos (dentro de las 72 horas que exige el RGPD) y la comunicación al CCN-CERT si aplica.",
  },
];

export default function RespuestaIncidentesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: "Respuesta a Incidentes de Ciberseguridad",
              description:
                "Servicio de respuesta a incidentes con SLA inferior a 2 horas. Contención, erradicación, recuperación y análisis forense.",
              url: "https://cisec.es/servicios/respuesta-incidentes",
            })
          ),
        }}
      />

      <ServiceHero
        title="Respuesta a Incidentes de Ciberseguridad"
        description="Cuando sufres un ciberataque, cada minuto cuenta. Nuestro equipo de respuesta a incidentes actúa en menos de 2 horas para contener la amenaza, erradicar al atacante y recuperar la operativa de tu negocio."
        breadcrumbItems={breadcrumbItems}
      />

      {/* Descripción ampliada */}
      <section className="py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4 text-muted-foreground">
            <p>
              Un ataque de ransomware puede paralizar tu empresa en minutos. Una brecha de datos puede
              exponer información confidencial de miles de clientes. Un compromiso de credenciales puede
              dar acceso total a tu infraestructura a un atacante. La diferencia entre un incidente
              controlado y una catástrofe está en la velocidad y calidad de la respuesta.
            </p>
            <p>
              Nuestro equipo de respuesta a incidentes (CSIRT) está disponible 24 horas al día, 7 días
              a la semana. Combinamos experiencia en análisis forense digital, reversión de malware y
              gestión de crisis para actuar de forma coordinada con tu equipo de IT. Desde la contención
              inicial hasta el informe forense final, te acompañamos en cada fase del incidente.
            </p>
          </div>
        </div>
      </section>

      <ProcessSection steps={steps} />

      {/* Precio / Urgencia */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg border border-destructive/50 bg-destructive/5 p-8 text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Emergencia 24h
            </p>
            <p className="mt-2 text-4xl font-bold">Contacta de urgencia</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Si estás sufriendo un incidente ahora mismo, contacta con nuestro equipo de guardia.
              Iniciamos la contención en menos de 2 horas.
            </p>
          </div>
        </div>
      </section>

      <FAQSection items={faqs} />
      <ServiceCTA />
    </>
  );
}
