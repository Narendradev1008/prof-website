import { useEffect, useState } from "react";
import { DEFAULT_STATISTICS } from "../lib/statisticsDefaults";

const isSupabaseConfigured = Boolean(
  import.meta.env.VITE_SUPABASE_URL && import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
);

export function useStatistics() {
  const [statistics, setStatistics] = useState(DEFAULT_STATISTICS);

  useEffect(() => {
    if (!isSupabaseConfigured) {
      return undefined;
    }

    let isCurrent = true;

    async function loadStatistics() {
      try {
        const { getStatistics } = await import("../lib/statistics");
        const nextStatistics = await getStatistics();

        if (isCurrent) {
          setStatistics(nextStatistics);
        }
      } catch (error) {
        // The built-in values keep public pages usable if Supabase is unavailable.
        console.error("Could not load site statistics:", error);
      }
    }

    loadStatistics();

    return () => {
      isCurrent = false;
    };
  }, []);

  return statistics;
}
