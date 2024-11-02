// Required only for typechecking on CI as Plasmo will dynamically generate types on build
import "@plasmohq/messaging";

interface MmMetadata {
  // biome-ignore lint/complexity/noBannedTypes: required for typechecking on CI
  user: {};
}

declare module "@plasmohq/messaging" {
  interface MessagesMetadata extends MmMetadata {}
}
