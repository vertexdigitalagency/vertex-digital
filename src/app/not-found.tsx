import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { ArrowLeft } from "lucide-react";
import PageShell from "@/components/layout/PageShell";
import Button from "@/components/ui/Button";

const VertexMesh = dynamic(() => import("@/components/ui/VertexMesh"));

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <PageShell>
      <section className="relative flex min-h-[80svh] items-center justify-center overflow-hidden pt-[var(--header-height)]">
        <div className="absolute inset-0 bg-vertex-radial" />
        <VertexMesh className="absolute left-1/2 top-0 h-[420px] w-[760px] -translate-x-1/2 opacity-40" />

        <div className="container-vertex relative text-center">
          <p className="eyebrow mb-5">Error 404</p>
          <h1 className="font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            This page took a wrong <span className="heading-gradient">turn</span>
          </h1>
          <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
            The page you&apos;re looking for doesn&apos;t exist or may have moved.
            Let&apos;s get you back on track.
          </p>
          <div className="mt-9 flex justify-center">
            <Button href="/" variant="primary">
              <ArrowLeft size={16} aria-hidden="true" /> Back to homepage
            </Button>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
