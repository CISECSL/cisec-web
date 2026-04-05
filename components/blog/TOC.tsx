"use client";

import { useEffect, useState } from "react";

interface TOCItem { id: string; text: string; level: number; }
interface TOCProps { items: TOCItem[]; }

export function TOC({ items }: TOCProps) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((entry) => { if (entry.isIntersecting) setActiveId(entry.target.id); }); },
      { rootMargin: "-80px 0px -80% 0px" }
    );
    items.forEach((item) => { const el = document.getElementById(item.id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  return (
    <nav aria-label="Tabla de contenidos" className="sticky top-24">
      <h2 className="mb-4 text-sm font-semibold text-foreground">En esta p&aacute;gina</h2>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.id} style={{ paddingLeft: `${(item.level - 2) * 12}px` }}>
            <a href={`#${item.id}`} className={`block text-sm transition-colors ${activeId === item.id ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}>
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
