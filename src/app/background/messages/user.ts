import type { PlasmoMessaging } from "@plasmohq/messaging";
import { STORAGE_KEY, storage } from "~/lib/storage";
import type { User } from "~/types";

const handler: PlasmoMessaging.MessageHandler<
  undefined,
  {
    user: User | null;
  }
> = async (_, res) => {
  const user = await storage.get<User | null>(STORAGE_KEY.USER);

  return res.send({
    user: user ?? null,
  });
};

export default handler;
