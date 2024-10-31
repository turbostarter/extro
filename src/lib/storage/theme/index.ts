import { Storage } from "@plasmohq/storage";
import { Theme } from "~/types";

const storage = new Storage();

export const THEME_STORAGE_KEY = "theme";

export const setupThemeStorage = async () => {
  const value = await storage.get(THEME_STORAGE_KEY);

  if (!value) {
    await storage.set(THEME_STORAGE_KEY, Theme.SYSTEM);
  }
};
