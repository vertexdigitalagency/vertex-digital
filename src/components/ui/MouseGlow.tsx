"use client";

import { useRef, useState, type PointerEvent } from "react";
import { cn } from "@/lib/utils";

interface MouseGlowProps {
  className?: string;
  size?: number;
  color?: string;
}

/**
 * Absolutely-positioned radial glow that tracks the pointer within its
 * nearest `relative` ancestor. Purely decorative — pointer-events disabled.
 */
export default function MouseGlow({
  className,
  size = 420,
  color = "rgba(124,58,237,0.18)",
}: MouseGlowProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  function handlePointerMove(e: PointerEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }

  return (
    <div
      ref={ref}
      onPointerMove={handlePointerMove}
      onPointerEnter={() => setVisible(true)}
      onPointerLeave={() => setVisible(false)}
      className={cn("pointer-events-auto absolute inset-0 overflow-hidden", className)}
    >
      <div
        className="pointer-events-none absolute rounded-full blur-3xl transition-opacity duration-500 ease-premium"
        style={{
          width: size,
          height: size,
          left: pos.x - size / 2,
          top: pos.y - size / 2,
          background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
          opacity: visible ? 1 : 0,
        }}
      />
    </div>
  );
}
