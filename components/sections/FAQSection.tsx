"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqSchema } from "@/lib/schema";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  items: FAQItem[];
}

export function FAQSection({ items }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(items)) }}
        />
        <h2 className="text-2xl font-bold sm:text-3xl">Preguntas frecuentes</h2>
        <div className="mt-8 divide-y divide-border">
          {items.map((item, i) => (
            <div key={i} className="py-4">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between text-left"
                aria-expanded={openIndex === i}
              >
                <span className="text-base font-medium">{item.question}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${openIndex === i ? "rotate-180" : ""}`}
                />
              </button>
              {openIndex === i && (
                <p className="mt-3 text-sm text-muted-foreground">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
