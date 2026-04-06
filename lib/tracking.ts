export function trackFormSubmission(service?: string) {
  if (typeof window === "undefined") return;

  // GA4 event → qualify_lead (linked to Google Ads AW-18020091441 via GA4)
  if (typeof (window as any).gtag === "function") {
    (window as any).gtag("event", "qualify_lead", {
      event_category: "contact_form",
      event_label: service || "contacto",
      service_interest: service || "general",
    });
  }

  // Also fire generate_lead for GA4 reporting
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
