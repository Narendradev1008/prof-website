import { supabase } from "./supabase";
import { DEFAULT_HOMEPAGE_CONTENT } from "./homepageContentDefaults";

export { DEFAULT_HOMEPAGE_CONTENT } from "./homepageContentDefaults";

export async function getHomepageContent() {
  if (!supabase) {
    return DEFAULT_HOMEPAGE_CONTENT;
  }

  const { data, error } = await supabase
    .from("homepage_content")
    .select("key, value");

  if (error) {
    throw error;
  }

  return {
    ...DEFAULT_HOMEPAGE_CONTENT,
    ...Object.fromEntries(
      data
        .filter(({ key, value }) => key in DEFAULT_HOMEPAGE_CONTENT && value?.trim())
        .map(({ key, value }) => [key, value]),
    ),
  };
}

export async function updateHomepageContent(content) {
  if (!supabase) {
    throw new Error("Supabase is not configured.");
  }

  const results = await Promise.all(
    Object.entries(content).map(([key, value]) =>
      supabase
        .from("homepage_content")
        .update({ value: value.trim() })
        .eq("key", key)
        .select("key"),
    ),
  );
  const failedRequest = results.find(({ data, error }) => error || data.length !== 1);

  if (failedRequest?.error) {
    throw failedRequest.error;
  }

  if (failedRequest) {
    throw new Error("Your account is not allowed to update the homepage content.");
  }
}
