import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";
import { NodeEnv } from "~/types";

export const env = createEnv({
  shared: {
    NODE_ENV: z.nativeEnum(NodeEnv).default(NodeEnv.DEVELOPMENT),
  },
  clientPrefix: "PLASMO_PUBLIC_",
  client: {
    PLASMO_PUBLIC_OPEN_PANEL_KEY: z.string(),
    PLASMO_PUBLIC_SUPABASE_URL: z.string().url(),
    PLASMO_PUBLIC_SUPABASE_ANON_KEY: z.string(),
  },
  runtimeEnv: {
    PLASMO_PUBLIC_SUPABASE_URL: process.env.PLASMO_PUBLIC_SUPABASE_URL,
    PLASMO_PUBLIC_SUPABASE_ANON_KEY:
      process.env.PLASMO_PUBLIC_SUPABASE_ANON_KEY,
    PLASMO_PUBLIC_OPEN_PANEL_KEY: process.env.PLASMO_PUBLIC_OPEN_PANEL_KEY,
  },
  skipValidation:
    (!!process.env.SKIP_ENV_VALIDATION &&
      ["1", "true"].includes(process.env.SKIP_ENV_VALIDATION)) ||
    process.env.npm_lifecycle_event === "lint",
  emptyStringAsUndefined: true,
});
