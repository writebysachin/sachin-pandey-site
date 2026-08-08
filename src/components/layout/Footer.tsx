// src/components/layout/Footer.tsx

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted-foreground lg:flex-row lg:px-10">
        
        {/* Left Side: Copyright & Title */}
        <div className="flex flex-col items-center gap-1 text-center lg:items-start lg:text-left">
          <p className="font-medium text-foreground">
            © {new Date().getFullYear()} Sachin Pandey
          </p>
          <p>Marketing Systems Consultant</p>
        </div>
        
        {/* Right Side: Social Links */}
        <div className="flex items-center gap-5">
          <a 
            href="https://www.linkedin.com/in/your-linkedin-username" 
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
            href="https://www.instagram.com/your-instagram-username" 
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