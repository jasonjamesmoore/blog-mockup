"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Laptop, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useState } from "react";

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
  const [menuOpen, setMenuOpen] = useState(false);

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
      <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-6">
        {/* Left: Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <span className="relative inline-block h-6 w-6 rounded-md border border-border bg-muted/80">
            <span className="absolute left-1 top-1 h-2 w-2 rounded-full bg-foreground/50" />
          </span>
          <span className="text-base font-semibold tracking-tight leading-none">
            Signal
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex flex-1 items-center justify-center gap-6 text-sm">
          {NAV_ITEMS.map(({ label, href }) => {
            const active = isActive(href);

            return (
              <Link
                key={href}
                href={href}
                className={getLinkClasses(href)}
                aria-current={active ? "page" : undefined}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions cluster*/}
        <div className="ml-auto flex items-center gap-2">
          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <Link
              href="/login"
              className="text-sm text-muted-foreground hover:text-foreground focus-visible:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Log in
            </Link>
            <Button size="sm" asChild>
              <Link href="/signup">Sign up</Link>
            </Button>
          </div>

          {/* Mobile Actions (stay outside burger) */}
          <div className="lg:hidden flex items-center gap-3">
            <ThemeToggle />
            <Link
              href="/login"
              className="text-sm text-muted-foreground hover:text-foreground focus-visible:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Log in
            </Link>
            <Button size="sm" asChild>
              <Link href="/signup">Sign up</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden h-9 w-9 px-0"
                aria-label={menuOpen ? "Close menu" : "Menu"}
              >
                {menuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </SheetTrigger>

            <SheetContent offsetTop showCloseButton={false}>
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <nav className="flex flex-col gap-1">
                {NAV_ITEMS.map(({ label, href }) => {
                  const active = isActive(href);
                  return (
                    <SheetClose asChild key={href}>
                      <Link
                        href={href}
                        className={cn(
                          "w-full rounded-md px-3 py-2 text-base text-muted-foreground",
                          "hover:bg-muted/50 hover:text-foreground",
                          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                          active && "bg-muted text-foreground",
                        )}
                        aria-current={active ? "page" : undefined}
                      >
                        {label}
                      </Link>
                    </SheetClose>
                  );
                })}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
