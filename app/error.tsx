"use client";

import Link from "next/link";

export default function ErrorPage({ error }: { error: Error }) {
  console.error(error);

  return (
    <div className="flex min-h-screen flex-col">
      <main className="container-page flex flex-1 flex-col items-center justify-center py-24">
        <div className="max-w-xl text-center">
          <p className="font-mono text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Something went wrong
          </p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-6xl">
            This page didn&apos;t load.
          </h1>
          <p className="mt-5 text-base text-muted-foreground">
            There was an unexpected error. Refresh the page or return home.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center rounded-lg bg-foreground px-5 py-2.5 text-sm font-medium text-background hover:opacity-90"
            >
              Go Home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
