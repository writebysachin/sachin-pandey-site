"use client";

import { motion } from "framer-motion";
import Script from "next/script";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background py-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl leading-tight text-foreground mb-6">
            Get in Touch
          </h1>
          <p className="text-lg text-muted-foreground mb-12">
            Have a question or want to work together? I'd love to hear from you.
          </p>

          {/* HubSpot Form Embed Container */}
          <div className="w-full rounded-2xl border border-border bg-surface p-6 md:p-8 shadow-sm">
            {/* Load HubSpot script efficiently */}
            <Script 
              src="https://js-na2.hsforms.net/forms/embed/244830542.js" 
              strategy="afterInteractive" 
            />
            
            {/* HubSpot Form Target Div */}
            <div 
              className="hs-form-frame" 
              data-region="na2" 
              data-form-id="ffb79e2f-eb32-4af7-8d31-79e024a7766a" 
              data-portal-id="244830542"
            />
          </div>

        </motion.div>
      </div>
    </div>
  );
}