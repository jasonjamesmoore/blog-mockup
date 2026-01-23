import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type PostGridProps = {
  children: ReactNode;
  className?: string;
};

export function PostGrid({ children, className }: PostGridProps) {
  return (
    <div
      className={cn(
        "grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
}
