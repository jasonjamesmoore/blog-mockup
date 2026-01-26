import { PostMeta } from "@/components/blog/post-meta";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type FeaturedPostCardProps = {
  title: string;
  href: string;
  imageSrc: string;
  category: string;
  date: string;
  author: string;
  excerpt: string;
};

export function FeaturedPostCard({
  title,
  href,
  imageSrc,
  category,
  date,
  author,
  excerpt,
}: FeaturedPostCardProps) {
  return (
    <Card className="group cursor-pointer border-border/40 bg-transparent shadow-none transition-colors duration-200 hover:bg-muted/20 hover:border-border/70 focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 focus-within:ring-offset-background">
      <div className="space-y-6 p-8 lg:grid lg:grid-cols-5 lg:gap-8 lg:space-y-0 lg:p-10">
        <div className="lg:col-span-3">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg border border-border bg-muted">
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 60vw, 100vw"
              priority
            />
          </div>
        </div>
        <div className="space-y-4 lg:col-span-2">
          <div className="space-y-1">
            <h2 className="line-clamp-2 max-w-[24ch] text-3xl font-bold leading-tight text-foreground lg:text-4xl">
              <Link
                href={href}
                className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                {title}
              </Link>
            </h2>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <PostMeta author={author} date={date} category={category} showAvatar />
              <ArrowRight className="h-4 w-4 translate-x-1 text-muted-foreground opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 group-focus-within:translate-x-0 group-focus-within:opacity-100" />
            </div>
            <p className="line-clamp-3 text-sm text-muted-foreground opacity-80">
              {excerpt}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}
