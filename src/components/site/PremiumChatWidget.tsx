"use client";

import Script from "next/script";
import { useEffect } from "react";

declare global {
  interface Window {
    premiumchat?: any[];
    premiumchat_domain?: string;
  }
}

export default function PremiumChatWidget() {
  useEffect(() => {
    // Initialize premium chat
    if (typeof window !== "undefined") {
      window.premiumchat = window.premiumchat || [];
    }
  }, []);

  return (
    <>
      <div className="pchat-widget-placeholder"></div>
      <Script
        id="premiumchat-widget"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(d,w,i){w.premiumchat = w.premiumchat || [];var p = w.premiumchat; if(!p.length){(()=>{
            w.premiumchat_domain = 'https://premium.chat/';var s = d.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = w.premiumchat_domain+'embed/js/widget.js'; var ss = d.getElementsByTagName('script')[0]; ss.parentNode.insertBefore(s, ss);})();}
            p.push({'num': p.length, 'wid': i});})(document, window,1015870);
          `,
        }}
      />
    </>
  );
}
