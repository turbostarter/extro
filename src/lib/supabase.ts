import { createClient } from "@supabase/supabase-js";
import { storage } from "#imports";
import env from "../../env.config";

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
