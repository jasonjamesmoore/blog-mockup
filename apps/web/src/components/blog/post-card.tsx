import { PostMeta } from "@/components/blog/post-meta";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type PostCardProps = {
  title: string;
  href: string;
  imageSrc: string;
  category: string;
  date: string;
  author: string;
};

export function PostCard({
  title,
  href,
  imageSrc,
  category,
  date,
  author,
}: PostCardProps) {
  return (
    <Card className="group cursor-pointer border-border/40 bg-transparent shadow-none transition-colors duration-200 hover:bg-muted/20 hover:border-border/70 focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 focus-within:ring-offset-background">
      <CardHeader>
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg border border-border bg-muted">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          />
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <h2 className="line-clamp-2 font-medium text-foreground">
            <Link
              href={href}
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              {title}
            </Link>
          </h2>
          <div className="flex items-center gap-2">
            <PostMeta
              author={author}
              date={date}
              category={category}
              showAvatar
            />
            <ArrowRight className="h-4 w-4 translate-x-1 text-muted-foreground opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 group-focus-within:translate-x-0 group-focus-within:opacity-100" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
