import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigation = [
  {
    name: "Case Studies",
    href: "/case-studies",
  },
  {
    name: "Insights",
    href: "/insights",
  },
  {
    name: "Work With Me",
    href: "/contact",
  },
  {
    name: "Yoga Write Code",
    href: "https://yogawritecode.com",
  },
  {
    name: "About",
    href: "/about",
  },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/60 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 font-semibold tracking-tight text-zinc-950"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-100 p-1 shadow-sm ring-1 ring-zinc-200/70">
            <Image
              src="/favicon.svg"
              alt="Sachin Pandey logo"
              width={40}
              height={40}
              className="h-full w-full rounded-md object-cover"
            />
          </span>
          <span className="text-base sm:text-lg">Sachin Pandey</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-zinc-600 transition-colors hover:text-black"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Button size="lg" className="rounded-md">
          Start a Conversation
          <ArrowUpRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </header>
  );
}