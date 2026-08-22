import { useEffect } from "react";
import { setMetaTag } from "../lib/meta";

interface PageMetaOptions {
  title: string;
  description: string;
  ogImage?: string;
}

export function usePageMeta({ title, description, ogImage }: PageMetaOptions): void {
  useEffect(() => {
    const fullTitle = `${title} | TriAxis Construction`;
    document.title = fullTitle;
    setMetaTag("name", "description", description);
    setMetaTag("property", "og:title", fullTitle);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:url", window.location.href);
    if (ogImage) {
      setMetaTag("property", "og:image", ogImage);
    }
  }, [title, description, ogImage]);
}
