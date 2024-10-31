import { setupStorage } from "~/lib/storage";

const main = async () => {
  await setupStorage();

  console.log(
    "Background service worker is running! Edit `src/app/background` and save to reload.",
  );
};

void main();
