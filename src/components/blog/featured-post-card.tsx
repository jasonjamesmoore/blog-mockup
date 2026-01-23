import { PostMeta } from "@/components/blog/post-meta";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export function FeaturedPostCard() {
  return (
    <Card
      className="
        group cursor-pointer
        transition-[transform,box-shadow,background-color] duration-200
        hover:-translate-y-0.5 hover:shadow-lg
        focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 focus-within:ring-offset-background
        dark:hover:shadow-none
        dark:hover:ring-1 dark:hover:ring-ring/50
        dark:hover:shadow-[0_0_0_1px_hsl(var(--ring)/0.35),0_0_24px_hsl(var(--ring)/0.18)]
      "
    >
      <div className="space-y-6 p-8 lg:grid lg:grid-cols-5 lg:gap-8 lg:space-y-0 lg:p-10">
        <div className="lg:col-span-3">
          <div className="aspect-[16/9] w-full overflow-hidden rounded-lg border border-border bg-muted" />
        </div>
        <div className="space-y-4 lg:col-span-2">
          <div className="space-y-1">
            <h2 className="line-clamp-2 max-w-[24ch] text-3xl font-bold leading-tight text-foreground lg:text-4xl">
              <Link href="/post/featured" className="focus:outline-none">
                Featured post title placeholder goes here
              </Link>
            </h2>
          </div>
          <div className="space-y-3">
            <PostMeta
              author="Author"
              date="Date"
              category="Category"
              showAvatar
            />
            <p className="line-clamp-3 text-sm text-muted-foreground opacity-80">
              Short excerpt placeholder that should wrap to a couple of lines to
              keep card heights consistent.
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}
