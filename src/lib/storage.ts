import { Storage } from "@plasmohq/storage";
import { Theme } from "~/types";

const storage = new Storage();

export const STORAGE_KEY = {
  THEME: "theme",
  USER: "user",
} as const;

const setupThemeStorage = async () => {
  const value = await storage.get(STORAGE_KEY.THEME);

  if (!value) {
    await storage.set(STORAGE_KEY.THEME, Theme.SYSTEM);
  }
};

export const setupStorage = async () => {
  await setupThemeStorage();
};
