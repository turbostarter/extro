import { storage } from "wxt/storage";

import { createClient } from "@supabase/supabase-js";
import { env } from "~/lib/env";

const storageAdapter = {
  getItem: async (key: string) =>
    (await storage.getItem<string>(`local:${key}`)) || null,
  setItem: async (key: string, value: string) => {
    await storage.setItem(`local:${key}`, value);
  },
  removeItem: (key: string) => storage.removeItem(`local:${key}`),
};

export const supabase = createClient(
  env.VITE_SUPABASE_URL,
  env.VITE_SUPABASE_ANON_KEY,
  {
    auth: {
      storage: storageAdapter,
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true,
    },
  },
);
