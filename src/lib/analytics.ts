import { OpenPanel } from "@openpanel/web";
import { env } from "~/lib/env";

export const { track } = new OpenPanel({
  clientId: env.VITE_OPEN_PANEL_KEY,
  trackScreenViews: true,
  trackOutgoingLinks: true,
  trackAttributes: true,
});
