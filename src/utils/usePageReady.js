import { useEffect, useState } from "react";

export default function usePageReady() {
  const [pageReady, setPageReady] = useState(false);

  useEffect(() => {
    const onPageLoad = () => {
      setPageReady(true);
    };

    // Check if the page has already loaded
    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);

  return pageReady;
}
