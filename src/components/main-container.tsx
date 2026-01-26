import type { ReactNode } from "react";

type MainContainerProps = {
  children: ReactNode;
  className?: string;
};

export function MainContainer({ children, className }: MainContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-5xl px-6 ${className ?? ""}`}>
      {children}
    </div>
  );
}
