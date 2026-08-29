"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Insights", href: "/insights" },
  { name: "Work With Me", href: "/contact" },
  { name: "Yoga Write Code", href: "/yoga-write-code" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10">
        
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 font-semibold tracking-tight text-foreground"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-surface shadow-sm ring-1 ring-border">
            <Image
              src="/favicon.svg"
              alt="Sachin Pandey logo"
              width={36}
              height={36}
              className="h-full w-full rounded-md object-cover"
            />
          </span>
          <span className="hidden sm:block">
            <Image
              src="/wordmark.svg"
              alt="Sachin Pandey"
              width={122}
              height={28}
              className="h-6 w-auto"
              priority // <-- THIS FIXES THE LCP WARNING
            />
          </span>
          <span className="sr-only">Sachin Pandey</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <a
            href="https://calendly.com/sachinpandey0/seo-content-interview"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="rounded-xl">
              Start a Conversation
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden rounded-md p-2 text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="mx-auto max-w-7xl px-6 py-6 lg:px-10">
            <nav className="flex flex-col gap-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="pt-2">
                <a
                  href="https://calendly.com/sachinpandey0/seo-content-interview"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Button size="lg" className="w-full rounded-xl">
                    Start a Conversation
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}