import { useEffect } from "react";
import { Router } from "next/router"; // Import Router from Next.js

const GA_TRACKING_ID = "G-S03EQK17R8"; // Replace with your actual GA property ID

interface WindowWithGtag extends Window {
  dataLayer?: any[];
  gtag?: (...args: any[]) => void;
}

declare const window: WindowWithGtag;

interface LogEventParams {
  action: string;
  category: string;
  label: string;
  value?: number;
}

export const initGA = () => {
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      window?.dataLayer?.push(arguments);
    };
    window.gtag("js", new Date());
    window.gtag("config", GA_TRACKING_ID);
  }
};

export const logEvent = ({
  action,
  category,
  label,
  value,
}: LogEventParams) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

export const logPageView = () => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", GA_TRACKING_ID);
  }
};

export type WithGAProps = {
  router: {
    asPath: string;
  };
};

export const withGA = (WrappedComponent: React.ComponentType<WithGAProps>) => {
  const trackPage = (page: string) => {
    logPageView();
  };

  const HOC: React.FC<WithGAProps> = (props) => {
    useEffect(() => {
      initGA();
      trackPage(props.router.asPath);
    }, [props.router.asPath]);

    return <WrappedComponent {...props} />;
  };

  return HOC;
};
