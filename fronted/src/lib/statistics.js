import { supabase } from "./supabase";
import { DEFAULT_STATISTICS } from "./statisticsDefaults";

export { DEFAULT_STATISTICS } from "./statisticsDefaults";

const sortByDisplayOrder = (statistics) =>
  [...statistics].sort((first, second) => first.display_order - second.display_order);

export async function getStatistics() {
  if (!supabase) {
    return DEFAULT_STATISTICS;
  }

  const { data, error } = await supabase
    .from("site_statistics")
    .select("key, value, label, display_order")
    .order("display_order");

  if (error) {
    throw error;
  }

  if (!data.length) {
    return DEFAULT_STATISTICS;
  }

  const statisticsByKey = new Map(data.map((statistic) => [statistic.key, statistic]));
  return sortByDisplayOrder(
    DEFAULT_STATISTICS.map((statistic) => ({
      ...statistic,
      ...statisticsByKey.get(statistic.key),
    })),
  );
}

export async function updateStatistics(statistics) {
  if (!supabase) {
    throw new Error("Supabase is not configured.");
  }

  const results = await Promise.all(
    statistics.map(({ key, value, label, display_order }) =>
      supabase
        .from("site_statistics")
        .update({
          value: value.trim(),
          label: label.trim(),
          display_order,
        })
        .eq("key", key)
        .select("key"),
    ),
  );

  const failedRequest = results.find(
    ({ data, error }) => error || data.length !== 1,
  );
  if (failedRequest?.error) {
    throw failedRequest.error;
  }

  if (failedRequest) {
    throw new Error("Your account is not allowed to update these statistics.");
  }
}

