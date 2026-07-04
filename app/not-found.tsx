import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="container-page flex flex-1 items-center justify-center py-24">
        <div className="max-w-xl text-center">
          <p className="font-mono text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Error 404
          </p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-6xl">
            Looks like this page doesn&apos;t exist.
          </h1>
          <p className="mt-5 text-base text-muted-foreground">
            The good news is the rest of the website does. Pick a useful direction below.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center rounded-lg bg-foreground px-5 py-2.5 text-sm font-medium text-background hover:opacity-90"
            >
              Go Home
            </Link>
            <Link
              href="/resources"
              className="inline-flex items-center rounded-lg border border-border bg-surface px-5 py-2.5 text-sm font-medium text-foreground hover:bg-surface-2"
            >
              Read Insights
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-lg border border-border bg-surface px-5 py-2.5 text-sm font-medium text-foreground hover:bg-surface-2"
            >
              Book Audit
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
