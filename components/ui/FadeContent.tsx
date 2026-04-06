"use client";

import { useRef, useState, useEffect, type ReactNode } from "react";

interface FadeContentProps {
  children: ReactNode;
  className?: string;
  delay?: number; // in milliseconds (e.g. 150 = 0.15s)
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
  duration?: number; // in milliseconds (e.g. 700 = 0.7s)
}

export function FadeContent({
  children,
  className,
  delay = 0,
  direction = "up",
  distance = 40,
  duration = 700,
}: FadeContentProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const axis = direction === "up" || direction === "down" ? "Y" : "X";
  const value = direction === "up" || direction === "left" ? distance : -distance;

  // Convert ms to seconds for CSS
  const durationS = duration / 1000;
  const delayS = delay / 1000;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translate(0, 0)" : `translate${axis}(${value}px)`,
        transition: `opacity ${durationS}s cubic-bezier(0.16, 1, 0.3, 1) ${delayS}s, transform ${durationS}s cubic-bezier(0.16, 1, 0.3, 1) ${delayS}s`,
      }}
    >
      {children}
    </div>
  );
}
