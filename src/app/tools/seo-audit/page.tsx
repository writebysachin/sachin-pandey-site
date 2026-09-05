"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Loader2, Send } from "lucide-react";

export default function SEOAuditPage() {
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!websiteUrl || !email) return;

    setStatus("loading");

    // TODO: Replace this with your actual form endpoint (like Web3Forms or Formspree)
    // For now, we simulate a 1.5 second delay to show the loading state
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setStatus("success");
  };

  return (
    <div className="min-h-screen bg-background py-20 md:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:px-10">
        
        {/* Back Button */}
        <Link 
          href="/tools" 
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Tools
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-primary mb-6">
            Free Manual Audit
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl leading-tight text-foreground mb-6">
            Get your 10-point SEO <br className="hidden sm:block" />
            <span className="text-primary">action plan.</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Enter your website below. I will personally review your site and email you a prioritized list of the most impactful fixes within 24 hours.
          </p>
        </div>

        {/* Form Container */}
        <div className="rounded-2xl border border-border bg-card p-8 md:p-10 shadow-sm">
          {status === "success" ? (
            // SUCCESS STATE
            <div className="text-center py-8 space-y-6">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h2 className="font-heading text-2xl font-semibold text-foreground">
                I've got your request!
              </h2>
              <p className="text-muted-foreground max-w-md mx-auto">
                I'm reviewing <span className="font-semibold text-foreground">{websiteUrl}</span> right now. 
                Check your inbox at <span className="font-semibold text-foreground">{email}</span> within 24 hours for your custom action plan.
              </p>
              <Link 
                href="/insights" 
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                Read more insights while you wait →
              </Link>
            </div>
          ) : (
            // FORM STATE
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="website" className="text-sm font-medium text-foreground">
                  Your Website URL
                </label>
                <input
                  id="website"
                  type="url"
                  required
                  placeholder="https://yourwebsite.com"
                  value={websiteUrl}
                  onChange={(e) => setWebsiteUrl(e.target.value)}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  Your Best Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
                <p className="text-xs text-muted-foreground">
                  We'll send the full report here. No spam, ever.
                </p>
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 text-base font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Processing Request...
                  </>
                ) : (
                  <>
                    Get My Free Audit
                    <Send className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        {/* Trust Signals */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Trusted by founders and marketing teams who want real results, not automated fluff.
          </p>
        </div>

      </div>
    </div>
  );
}