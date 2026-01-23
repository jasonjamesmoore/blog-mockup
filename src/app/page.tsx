import { MainContainer } from "@/components/main-container";
import { SiteHeader } from "@/components/site-header";
import { FeaturedPostCard } from "@/components/blog/featured-post-card";
import { PostCard } from "@/components/blog/post-card";
import { PostGrid } from "@/components/blog/post-grid";

export default function Home() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="py-10">
        <MainContainer>
          <div className="space-y-6">
            <div className="space-y-1">
              <h1>Blog</h1>
              <p>Short description placeholder.</p>
              <div className="text-sm text-muted-foreground">
                All · Engineering · Product · Company
              </div>
            </div>
            <div className="rounded-xl bg-muted/20 dark:bg-transparent p-2 pt-8">
              <div className="space-y-5">
                <FeaturedPostCard />
                <div className="p-4 pt-3">
                  <PostGrid>
                    <PostCard />
                    <PostCard />
                    <PostCard />
                    <PostCard />
                  </PostGrid>
                </div>
              </div>
            </div>
          </div>
        </MainContainer>
      </main>
    </div>
  );
}
