"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("cisec-cookie-consent");
    if (!stored) {
      // Small delay so it doesn't flash on load
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cisec-cookie-consent", "accepted");
    setVisible(false);
    window.dispatchEvent(new Event("cookie-consent-changed"));
  };

  const reject = () => {
    localStorage.setItem("cisec-cookie-consent", "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-card/95 backdrop-blur-md p-4 sm:p-6">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-xl">
          <p className="text-sm text-foreground font-medium">Utilizamos cookies</p>
          <p className="mt-1 text-xs text-muted-foreground">
            Usamos cookies propias y de terceros para analizar el uso del sitio y mejorar nuestros
            servicios. Puedes aceptar, rechazar o consultar nuestra{" "}
            <Link href="/cookies" className="text-primary underline hover:text-primary/80">
              Política de Cookies
            </Link>.
          </p>
        </div>
        <div className="flex shrink-0 gap-3">
          <button
            onClick={reject}
            className="rounded-md border border-border px-4 py-2 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            Rechazar
          </button>
          <button
            onClick={accept}
            className="rounded-md bg-primary px-4 py-2 text-xs font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Aceptar cookies
          </button>
        </div>
      </div>
    </div>
  );
}
