// google-analytics.js

import { useEffect } from "react";

export default function GoogleAnalytics() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Initialize Google Analytics
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", "G-S03EQK17R8");
    }
  }, []);

  return null;
}
