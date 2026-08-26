"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { cn } from "@/lib/utils";

interface VertexMeshProps {
  className?: string;
}

// Hand-placed node field — deliberately irregular, not a grid, so it reads
// as a constellation rather than a stock "network" clipart.
const NODES = [
  { id: "n1", x: 120, y: 90 },
  { id: "n2", x: 340, y: 60 },
  { id: "n3", x: 560, y: 140 },
  { id: "n4", x: 240, y: 220 },
  { id: "n5", x: 480, y: 260 },
  { id: "n6", x: 700, y: 100 },
  { id: "n7", x: 80, y: 300 },
  { id: "n8", x: 640, y: 300 },
  { id: "n9", x: 380, y: 360 },
  { id: "n10", x: 180, y: 420 },
  { id: "n11", x: 560, y: 420 },
  { id: "n12", x: 720, y: 380 },
] as const;

// Edges reference node indices — sparse, so the mesh stays elegant, not busy.
const EDGES: [number, number][] = [
  [0, 1],
  [1, 2],
  [1, 3],
  [2, 5],
  [3, 4],
  [4, 5],
  [2, 4],
  [3, 6],
  [4, 8],
  [5, 7],
  [7, 11],
  [8, 9],
  [8, 10],
  [9, 10],
  [10, 11],
  [6, 3],
];

export default function VertexMesh({ className }: VertexMeshProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion || !svgRef.current) return;

    const ctx = gsap.context(() => {
      const nodeEls = gsap.utils.toArray<SVGCircleElement>(".vertex-node");
      const lineEls = gsap.utils.toArray<SVGLineElement>(".vertex-edge");

      nodeEls.forEach((node, i) => {
        gsap.to(node, {
          y: `+=${gsap.utils.random(-14, 14)}`,
          x: `+=${gsap.utils.random(-10, 10)}`,
          duration: gsap.utils.random(4, 7),
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          delay: i * 0.15,
        });
        gsap.to(node, {
          opacity: gsap.utils.random(0.5, 1),
          duration: gsap.utils.random(2, 4),
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          delay: i * 0.2,
        });
      });

      lineEls.forEach((line, i) => {
        gsap.to(line, {
          opacity: gsap.utils.random(0.08, 0.28),
          duration: gsap.utils.random(3, 6),
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          delay: i * 0.1,
        });
      });
    }, svgRef);

    return () => ctx.revert();
  }, []);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 800 480"
      className={cn("pointer-events-none select-none", className)}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="vertexLineGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7C3AED" />
          <stop offset="100%" stopColor="#3B82F6" />
        </linearGradient>
        <radialGradient id="vertexNodeGradient">
          <stop offset="0%" stopColor="#A78BFA" />
          <stop offset="100%" stopColor="#3B82F6" />
        </radialGradient>
      </defs>

      {EDGES.map(([a, b], i) => {
        const na = NODES[a];
        const nb = NODES[b];
        if (!na || !nb) return null;
        return (
          <line
            key={`edge-${i}`}
            className="vertex-edge"
            x1={na.x}
            y1={na.y}
            x2={nb.x}
            y2={nb.y}
            stroke="url(#vertexLineGradient)"
            strokeWidth="1"
            opacity="0.16"
          />
        );
      })}

      {NODES.map((node) => (
        <circle
          key={node.id}
          className="vertex-node"
          cx={node.x}
          cy={node.y}
          r={node.x % 3 === 0 ? 4 : 2.5}
          fill="url(#vertexNodeGradient)"
          opacity="0.8"
        />
      ))}
    </svg>
  );
}
