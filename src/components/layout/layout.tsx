import { useStorage } from "@plasmohq/storage/hook";
import { ErrorBoundary } from "~/components/common/error-boundary";
import { Suspense } from "~/components/common/suspense";
import { STORAGE_KEY } from "~/lib/storage";
import { cn } from "~/lib/utils";
import { Theme } from "~/types";

import "~/styles/globals.css";
import { Header } from "~/components/layout/header";

interface LayoutProps {
  readonly children: React.ReactElement;
  readonly loadingFallback?: React.ReactElement;
  readonly errorFallback?: React.ReactElement;
  readonly className?: string;
}

export const Layout = ({
  children,
  loadingFallback,
  errorFallback,
  className,
}: LayoutProps) => {
  const [theme] = useStorage<Theme>(STORAGE_KEY.THEME);

  return (
    <ErrorBoundary fallback={errorFallback}>
      <Suspense fallback={loadingFallback}>
        <div
          id="root"
          className={cn(
            "flex min-h-screen w-full min-w-[23rem] flex-col items-center justify-center font-sans text-base",
            {
              dark:
                theme === Theme.DARK ||
                (theme === Theme.SYSTEM &&
                  window.matchMedia("(prefers-color-scheme: dark)").matches),
            },
          )}
        >
          <div
            className={cn(
              "flex-1 bg-background text-foreground w-full max-w-[80rem] grow flex-col items-center justify-between gap-16 p-4",
              className,
            )}
          >
            <Header />
            {children}
          </div>
        </div>
      </Suspense>
    </ErrorBoundary>
  );
};
