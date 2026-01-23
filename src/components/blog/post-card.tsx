import { PostMeta } from "@/components/blog/post-meta";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";

export function PostCard() {
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
      <CardHeader>
        <div className="aspect-[16/9] w-full overflow-hidden rounded-lg border border-border bg-muted" />
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <h2 className="line-clamp-2 font-medium text-foreground">
            <Link
              href="/post/example" // placeholder route
              className="focus:outline-none"
            >
              Post title placeholder goes here
            </Link>
          </h2>
          <PostMeta
            author="Author"
            date="Date"
            category="Category"
            showAvatar
          />
        </div>
      </CardContent>
    </Card>
  );
}
