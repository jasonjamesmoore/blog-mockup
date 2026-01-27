"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Laptop } from "lucide-react";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

// Navigation items
const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
] as const;

// Theme helper function
function ThemeToggle({ className }: { className?: string }) {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className={cn("h-9 w-9 px-0", className)}
          aria-label="Theme"
        >
          <Laptop className="h-4 w-4" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function SiteHeader() {
  const pathname = usePathname();

  // Derive active state for each nav item during render
  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href === "/blog")
      return pathname === "/blog" || pathname.startsWith("/blog/");
    return pathname === href;
  };

  // Compute link classes based on active state
  const getLinkClasses = (href: string) =>
    cn(
      "text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
      isActive(href) && "text-foreground",
    );

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="relative">
        <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-6">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <span className="relative inline-block h-5 w-5 rounded-md border border-border/70 bg-muted/70">
              <span className="absolute left-1 top-1 h-1.5 w-1.5 rounded-full bg-foreground/50" />
            </span>
            <span className="text-sm font-medium tracking-tight">Signal</span>
          </Link>

          {/* Nav */}
          <nav className="flex items-center gap-6 text-sm">
            {NAV_ITEMS.map(({ label, href }) => {
              const active = isActive(href);

              return (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    "text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                    active && "text-foreground",
                  )}
                  aria-current={active ? "page" : undefined}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/login">Log in</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/signup">Sign up</Link>
            </Button>

            {/* Mobile theme toggle */}
            <div className="xl:hidden">
              <ThemeToggle />
            </div>
          </div>
        </div>

        {/* Desktop rail theme toggle */}
        <div className="absolute right-6 top-1/2 hidden -translate-y-1/2 xl:block">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
