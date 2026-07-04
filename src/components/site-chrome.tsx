import Link from "next/link";
import Image from "next/image";

export function SiteHeader() {
  const links = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/work", label: "Work" },
    { to: "/about", label: "About" },
    { to: "/resources", label: "Insights" },
    { to: "/contact", label: "Contact" },
  ] as const;

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link href="/" className="group flex min-w-0 items-center gap-2.5">
          <Image
            src="/favicon.svg"
            alt="Sachin Pandey"
            width={32}
            height={32}
            className="h-8 w-8 shrink-0 rounded-lg shadow-md"
          />
          <span className="flex min-w-0 flex-col leading-tight">
            <span className="truncate text-[15px] font-semibold text-foreground">
              Sachin Pandey
            </span>
            <span className="hidden text-[11px] tracking-wide text-muted-foreground sm:block">
              Master Business Operation System
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              href={l.to}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="inline-flex shrink-0 items-center rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          Book Audit →
        </Link>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-surface">
      <div className="container-page grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <Image
              src="/favicon.svg"
              alt="Sachin Pandey"
              width={32}
              height={32}
              className="h-8 w-8 rounded-lg"
            />
            <span className="text-[15px] font-semibold">Sachin Pandey</span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Think clearly. Write simply.{" "}
            <span className="text-gradient-brand font-medium">Build systems.</span> Independent
            operator building SEO, reporting and automation systems for B2B SMBs.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-foreground">Work</p>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>
              <Link href="/services" className="hover:text-foreground">
                Services
              </Link>
            </li>
            <li>
              <Link href="/work" className="hover:text-foreground">
                Work
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-foreground">
                Clarity Sprint
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-foreground">More</p>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>
              <Link href="/about" className="hover:text-foreground">
                About
              </Link>
            </li>
            <li>
              <Link href="/resources" className="hover:text-foreground">
                Insights
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-foreground">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-foreground">
                Terms
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-page flex flex-col items-start justify-between gap-2 py-5 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Sachin Pandey · sachinpandey.com.np</p>
          <p>
            Brand is <span className="text-gradient-brand font-medium">operational truth</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}
