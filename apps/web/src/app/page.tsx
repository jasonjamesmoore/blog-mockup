import { MainContainer } from "@/components/main-container";
import { SiteHeader } from "@/components/site-header";

import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="py-16">
        <MainContainer>
          <div className="space-y-6">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                Signal Blog
              </p>
              <h1 className="text-4xl font-semibold tracking-tight leading-[1.05] md:text-5xl">
                Product, engineering, and design updates from the team.
              </h1>
              <p className="max-w-2xl text-base text-muted-foreground">
                Explore the latest thinking on product telemetry, performance,
                and thoughtful system design.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/blog"
                className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Read the blog
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                About the team
              </Link>
            </div>
          </div>
        </MainContainer>
      </main>
    </div>
  );
}
