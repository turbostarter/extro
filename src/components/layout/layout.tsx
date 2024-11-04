import { useStorage } from "@plasmohq/storage/hook";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { ErrorBoundary } from "~/components/common/error-boundary";
import { Suspense } from "~/components/common/suspense";
import { Footer } from "~/components/layout/footer";
import { Header } from "~/components/layout/header";
import { Toaster } from "~/components/ui/sonner";
import { STORAGE_KEY } from "~/lib/storage";
import { supabase } from "~/lib/supabase";
import { cn } from "~/lib/utils";
import { Theme } from "~/types";
import type { User } from "~/types";

import "~/styles/globals.css";

interface LayoutProps {
  readonly children: React.ReactNode;
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
  const [queryClient] = useState(() => new QueryClient());

  const [theme] = useStorage<Theme>(STORAGE_KEY.THEME);
  const [_, setUser] = useStorage<User | null>(STORAGE_KEY.USER);

  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange((_, session) => {
      setUser(session?.user ?? null);
      queryClient.invalidateQueries({ queryKey: ["user"] });
    });

    return () => {
      data.subscription.unsubscribe();
    };
  }, [setUser, queryClient.invalidateQueries]);

  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary fallback={errorFallback}>
        <Suspense fallback={loadingFallback}>
          <div
            id="root"
            className={cn(
              "flex min-h-screen bg-background text-foreground w-full min-w-[23rem] flex-col items-center justify-center font-sans text-base",
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
                "flex w-full max-w-[80rem] grow flex-col items-center justify-between gap-12 p-5",
                className,
              )}
            >
              <Header />
              {children}
              <Footer />
              <Toaster />
            </div>
          </div>
        </Suspense>
      </ErrorBoundary>
    </QueryClientProvider>
  );
};
