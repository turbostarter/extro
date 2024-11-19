import { defineBackground } from "wxt/sandbox";

const main = () => {
  console.log(
    "Background service worker is running! Edit `src/app/background` and save to reload.",
  );
};

export default defineBackground(main);
