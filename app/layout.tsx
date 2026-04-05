import type { Metadata } from "next";
import { Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "CISEC Ciberseguridad | Pentesting Empresas España",
    template: "%s | CISEC Ciberseguridad",
  },
  description:
    "Pentesting manual por expertos certificados OSCP. Descubrimos las vulnerabilidades de tu empresa antes que los atacantes. Auditoría de seguridad, ENS, NIS2.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://cisec.es"
  ),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`dark ${interTight.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-primary focus:px-4 focus:py-2 focus:text-background"
        >
          Saltar al contenido
        </a>
        {children}
      </body>
    </html>
  );
}
