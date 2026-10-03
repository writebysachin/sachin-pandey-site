// src/components/layout/Footer.tsx

import Link from "next/link";

const quickLinks = [
  { name: "Insights", href: "/insights" },
  { name: "Tools", href: "/tools" },
  { name: "Work With Me", href: "/contact" },
  { name: "Yoga Write Code", href: "/yoga-write-code" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted-foreground lg:flex-row lg:px-10">
        
        {/* Left Side: Copyright & Title */}
        <div className="flex flex-col items-center gap-1 text-center lg:items-start lg:text-left">
          <p className="font-medium text-foreground">
            © {new Date().getFullYear()} Sachin Pandey
          </p>
          <p>I help B2B companies build websites, SEO, and content systems that compound over time.</p>
        </div>
        
        {/* Middle: Quick Links */}
        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2" aria-label="Footer">
          {quickLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Right Side: Social Links */}
        <div className="flex items-center gap-5">
          <a 
            href="https://x.com/writebysachin" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="Visit my X profile"
          >
            {/* X (Twitter) Inline SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 2.126H5.117z"/>
            </svg>
          </a>

          <a 
            href="https://www.linkedin.com/in/writebysachin" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="Visit my LinkedIn profile"
          >
            {/* LinkedIn Inline SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect width="4" height="12" x="2" y="9"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </a>
          
          <a 
            href="https://www.instagram.com/writebysachin" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="Visit my Instagram profile"
          >
            {/* Instagram Inline SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
            </svg>
          </a>
        </div>

      </div>
    </footer>
  );
}