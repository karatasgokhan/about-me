"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Sets data-inview="true" the first time the element scrolls into view.
 * The animations themselves live in globals.css.
 */
export function Reveal({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} data-inview={inView} className={className}>
      {children}
    </div>
  );
}
