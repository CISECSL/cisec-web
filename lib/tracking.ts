export function trackFormSubmission(service?: string) {
  if (typeof window === "undefined") return;

  // Google Ads conversion
  const gadsId = process.env.NEXT_PUBLIC_GADS_ID;
  if (gadsId && typeof (window as any).gtag === "function") {
    (window as any).gtag("event", "conversion", {
      send_to: gadsId,
      event_category: "form",
      event_label: service || "contacto",
    });
  }

  // GA4 custom event
  if (typeof (window as any).gtag === "function") {
    (window as any).gtag("event", "generate_lead", {
      event_category: "contact_form",
      event_label: service || "general",
    });
  }

  // dataLayer push for GTM
  if (typeof (window as any).dataLayer !== "undefined") {
    (window as any).dataLayer.push({
      event: "form_submission",
      form_type: "contact",
      service_interest: service || "general",
    });
  }
}
