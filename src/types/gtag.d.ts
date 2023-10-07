declare function gtag(
  event: string,
  action: string,
  options?: {
    event_category?: string;
    event_label?: string;
    value?: number;
    send_to?: string; // Add the send_to property for Google Ads conversion tracking
  }
): void;

// Define the global gtag function on the window object
declare global {
  interface Window {
    gtag: typeof gtag;
  }
}

// Export the gtag function
export = gtag;
