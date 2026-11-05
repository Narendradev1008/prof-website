import { useEffect, useState } from "react";
import { DEFAULT_HOMEPAGE_CONTENT } from "../lib/homepageContentDefaults";

const isSupabaseConfigured = Boolean(
  import.meta.env.VITE_SUPABASE_URL && import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
);

export function useHomepageContent() {
  const [content, setContent] = useState(DEFAULT_HOMEPAGE_CONTENT);

  useEffect(() => {
    if (!isSupabaseConfigured) {
      return undefined;
    }

    let isCurrent = true;

    async function loadHomepageContent() {
      try {
        const { getHomepageContent } = await import("../lib/homepageContent");
        const nextContent = await getHomepageContent();

        if (isCurrent) {
          setContent(nextContent);
        }
      } catch (error) {
        // The built-in values keep the homepage usable if Supabase is unavailable.
        console.error("Could not load homepage content:", error);
      }
    }

    loadHomepageContent();

    return () => {
      isCurrent = false;
    };
  }, []);

  return content;
}
