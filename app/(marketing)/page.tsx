import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { CaseStudiesSection } from "@/components/sections/CaseStudiesSection";
import { CTASection } from "@/components/sections/CTASection";
import { organizationSchema, localBusinessSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Pentesting Empresas España | CISEC Ciberseguridad",
  description:
    "Pentesting manual por expertos certificados OSCP. Descubrimos las vulnerabilidades de tu empresa antes que los atacantes. Auditoría de seguridad, ENS, NIS2 en España.",
  alternates: { canonical: "https://cisec.es" },
  openGraph: {
    title: "Pentesting Empresas España | CISEC Ciberseguridad",
    description:
      "Pentesting manual por expertos certificados OSCP. Auditoría de seguridad para empresas en España.",
    url: "https://cisec.es",
    siteName: "CISEC Ciberseguridad",
    locale: "es_ES",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([organizationSchema(), localBusinessSchema()]),
        }}
      />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <CaseStudiesSection />
      <CTASection />
    </>
  );
}
