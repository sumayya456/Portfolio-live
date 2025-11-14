// src/AnalyticsListener.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

const AnalyticsListener: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (!window.gtag) return;

    window.gtag("event", "page_view", {
      page_path: location.pathname + location.search,
    });
  }, [location]);

  return null; // nothing visible
};

export default AnalyticsListener;
