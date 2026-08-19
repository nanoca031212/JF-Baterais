"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

export default function AnimatedHighlightCard({
  children,
}: {
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? "translate-x-0 opacity-100" : "translate-x-24 opacity-0"
      }`}
    >
      {children}
    </div>
  );
}
