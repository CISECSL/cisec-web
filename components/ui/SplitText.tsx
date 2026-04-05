"use client";

import { useEffect, useRef, useState, useCallback } from "react";

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
}

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*";

export function SplitText({ text, className, delay = 30 }: SplitTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [displayText, setDisplayText] = useState(text.replace(/[^\s]/g, "_"));
  const [started, setStarted] = useState(false);

  const animate = useCallback(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            if (i < iteration) return char;
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );
      iteration += 0.5;
      if (iteration >= text.length) clearInterval(interval);
    }, delay);
    return () => clearInterval(interval);
  }, [text, delay]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          animate();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started, animate]);

  return (
    <span ref={ref} className={className}>
      {displayText}
    </span>
  );
}
