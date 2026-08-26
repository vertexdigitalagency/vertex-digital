/**
 * Shown automatically by Next.js during a slow client-side navigation while
 * a route segment's code/data is still loading. Deliberately generic (an
 * eyebrow/title/description block over a card grid) since it has to stand
 * in for whichever page is loading, without knowing which one that is.
 */
export default function Loading() {
  return (
    <div className="flex min-h-[100svh] items-center justify-center bg-background">
      <span className="sr-only" role="status">
        Loading page content…
      </span>
      <div className="container-vertex animate-pulse" aria-hidden="true">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto h-3 w-28 rounded-full bg-white/10" />
          <div className="mx-auto mt-5 h-9 w-4/5 rounded-full bg-white/10" />
          <div className="mx-auto mt-4 h-4 w-3/5 rounded-full bg-white/5" />
        </div>
        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="h-44 rounded-xl2 border border-white/[0.06] bg-surface"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
