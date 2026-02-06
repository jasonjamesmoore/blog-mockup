import { Avatar, AvatarFallback } from "@/components/ui/avatar";

type PostMetaProps = {
  author: string;
  date: string;
  category: string;
  showAvatar?: boolean;
};

function getInitials(name: string) {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

export function PostMeta({
  author,
  date,
  category,
  showAvatar,
}: PostMetaProps) {
  return (
    <p className="text-sm text-muted-foreground">
      {category} · {date} ·{" "}
      <span className="inline-flex items-center gap-2">
        {showAvatar ? (
          <Avatar className="h-4 w-4">
            <AvatarFallback className="text-[10px]">
              {getInitials(author)}
            </AvatarFallback>
          </Avatar>
        ) : null}
        <span>{author}</span>
      </span>
    </p>
  );
}
