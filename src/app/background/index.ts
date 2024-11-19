import { StorageKey, getStorage } from "@/lib/storage";
import { defineBackground } from "wxt/sandbox";
import { Message, onMessage } from "~/lib/messaging";

const main = () => {
  console.log(
    "Background service worker is running! Edit `src/app/background` and save to reload.",
  );
};

onMessage(Message.USER, () => {
  const storage = getStorage(StorageKey.USER);
  return storage.getValue();
});

export default defineBackground(main);
