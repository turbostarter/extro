import { Storage } from "@plasmohq/storage";
import { createClient } from "@supabase/supabase-js";
import { env } from "~/lib/env";

const storage = new Storage({
  area: "local",
});

const storageAdapter = {
  getItem: async (key: string) => (await storage.get(key)) || null,
  setItem: async (key: string, value: string) => {
    await storage.set(key, value);
  },
  removeItem: (key: string) => storage.remove(key),
};

export const supabase = createClient(
  env.PLASMO_PUBLIC_SUPABASE_URL,
  env.PLASMO_PUBLIC_SUPABASE_ANON_KEY,
  {
    auth: {
      storage: storageAdapter,
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true,
    },
  },
);
