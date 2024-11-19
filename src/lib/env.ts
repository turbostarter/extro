import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";
import { NodeEnv } from "~/types";

export const env = createEnv({
  shared: {
    NODE_ENV: z.nativeEnum(NodeEnv).default(NodeEnv.DEVELOPMENT),
  },
  clientPrefix: "VITE_",
  client: {
    VITE_OPEN_PANEL_KEY: z.string(),
    VITE_SUPABASE_URL: z.string().url(),
    VITE_SUPABASE_ANON_KEY: z.string(),
  },
  runtimeEnv: {
    VITE_SUPABASE_URL: import.meta.env.VITE_SUPABASE_URL,
    VITE_SUPABASE_ANON_KEY: import.meta.env.VITE_SUPABASE_ANON_KEY,
    VITE_OPEN_PANEL_KEY: import.meta.env.VITE_OPEN_PANEL_KEY,
  },
  skipValidation:
    (!!import.meta.env.SKIP_ENV_VALIDATION &&
      ["1", "true"].includes(import.meta.env.SKIP_ENV_VALIDATION)) ||
    import.meta.env.npm_lifecycle_event === "lint",
  emptyStringAsUndefined: true,
});
