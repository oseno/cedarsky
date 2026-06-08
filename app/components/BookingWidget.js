"use client";

import { useEffect } from 'react';

export default function BookingWidget() {
  useEffect(() => {
    // Load Calendly widget script only on client side
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div className="mt-8 max-w-4xl mx-auto">
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/chambershalal/30min?hide_gdpr_banner=1"
        style={{ minWidth: '320px', height: '700px' }}
      ></div>
    </div>
  );
}