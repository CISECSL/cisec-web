"use client";

import { useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface FadeContentProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
  duration?: number;
}

export function FadeContent({
  children,
  className,
  delay = 0,
  direction = "up",
  distance = 60,
  duration = 1,
}: FadeContentProps) {
  const ref = useRef<HTMLDivElement>(null);

  const axis = direction === "up" || direction === "down" ? "y" : "x";
  const value =
    direction === "up" || direction === "left" ? distance : -distance;

  useGSAP(
    () => {
      if (!ref.current) return;
      gsap.from(ref.current, {
        [axis]: value,
        opacity: 0,
        duration,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className={className} style={{ willChange: "transform" }}>
      {children}
    </div>
  );
}
