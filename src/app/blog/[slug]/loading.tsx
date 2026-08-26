export default function BlogPostLoading() {
  return (
    <div className="relative overflow-hidden pt-[calc(var(--header-height)+2.5rem)] pb-20 md:pb-28">
      <div className="absolute inset-0 bg-vertex-radial" />
      <span className="sr-only" role="status">
        Loading article…
      </span>
      <div className="container-vertex relative max-w-2xl animate-pulse" aria-hidden="true">
        <div className="h-4 w-24 rounded-full bg-white/10" />
        <div className="mt-8 flex gap-3">
          <div className="h-5 w-24 rounded-full bg-white/10" />
          <div className="h-5 w-32 rounded-full bg-white/5" />
        </div>
        <div className="mt-5 h-10 w-full rounded-full bg-white/10" />
        <div className="mt-3 h-10 w-3/4 rounded-full bg-white/10" />
        <div className="mt-5 h-4 w-40 rounded-full bg-white/5" />
        <div className="mt-10 space-y-4 border-t border-white/[0.06] pt-10">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="h-4 w-full rounded-full bg-white/5" />
          ))}
        </div>
      </div>
    </div>
  );
}
