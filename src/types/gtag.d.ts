// gtag.d.ts

declare function gtag(
    event: string,
    action: string,
    options?: {
      event_category?: string;
      event_label?: string;
      value?: number;
    }
  ): void;
  