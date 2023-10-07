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
