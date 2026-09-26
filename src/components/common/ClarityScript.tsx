import Script from "next/script";

/**
 * Microsoft Clarity tracking.
 * Project ID: yo9apgwg9m (sachinpandey.com.np)
 *
 * Loaded with `afterInteractive` so the script never blocks first paint
 * or delays the LCP element.
 */
const CLARITY_PROJECT_ID = process.env.NEXT_PUBLIC_CLARITY_ID || "yo9apgwg9m";

export default function ClarityScript() {
  return (
    <Script id="clarity-script" strategy="afterInteractive">
      {`(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i+"?ref=bwt";
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "${CLARITY_PROJECT_ID}");`}
    </Script>
  );
}
