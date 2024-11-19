import { Theme, type User } from "~/types";

import { useQuery } from "@tanstack/react-query";
import { type WxtStorageItem, storage as browserStorage } from "wxt/storage";

export const StorageKey = {
  THEME: "local:theme",
  USER: "local:user",
} as const;

export type StorageKey = (typeof StorageKey)[keyof typeof StorageKey];

const storage = {
  [StorageKey.THEME]: browserStorage.defineItem<Theme>(StorageKey.THEME, {
    fallback: Theme.SYSTEM,
  }),
  [StorageKey.USER]: browserStorage.defineItem<User | null>(StorageKey.USER, {
    fallback: null,
  }),
};

export const useStorage = <K extends StorageKey>(key: K) => {
  type Value = (typeof storage)[K] extends WxtStorageItem<infer V, infer _>
    ? V
    : never;

  const item = storage[key] as WxtStorageItem<Value, Record<string, unknown>>;

  const { data, refetch } = useQuery({
    queryKey: [key],
    queryFn: () => item.getValue(),
  });

  const remove = () => {
    void item.removeValue();
    void refetch();
  };

  const set = (value: Value) => {
    void item.setValue(value);
    void refetch();
  };

  return { data: data ?? item.fallback, remove, set };
};
