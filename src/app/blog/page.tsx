import { MainContainer } from "@/components/main-container";
import { SiteHeader } from "@/components/site-header";
import { FeaturedPostCard } from "@/components/blog/featured-post-card";
import { PostCard } from "@/components/blog/post-card";
import { PostGrid } from "@/components/blog/post-grid";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const featuredPost = {
  title: "Designing a unified event pipeline for product telemetry",
  href: "/blog/unified-event-pipeline",
  imageSrc: "/images/posts/grad-01.svg",
  category: "Engineering",
  date: "Jan 8, 2026",
  author: "Avery Patel",
  excerpt:
    "How we consolidated analytics, audit logs, and in-app events into a single, resilient stream without slowing feature velocity.",
};

const posts = [
  {
    title: "Reducing dashboard load time by 42% with smarter caching",
    href: "/blog/dashboard-cache",
    imageSrc: "/images/posts/grad-02.svg",
    category: "Engineering",
    date: "Jan 5, 2026",
    author: "Maya Chen",
  },
  {
    title: "From roadmap to rollout: a framework for launch readiness",
    href: "/blog/launch-readiness",
    imageSrc: "/images/posts/grad-03.svg",
    category: "Product",
    date: "Dec 22, 2025",
    author: "Jordan Lewis",
  },
  {
    title: "Building trust in permissions with progressive disclosure",
    href: "/blog/permissions-disclosure",
    imageSrc: "/images/posts/grad-04.svg",
    category: "Design",
    date: "Dec 10, 2025",
    author: "Riley Osei",
  },
  {
    title: "Incident reviews that actually change behavior",
    href: "/blog/incident-reviews",
    imageSrc: "/images/posts/grad-05.svg",
    category: "Company",
    date: "Nov 28, 2025",
    author: "Sam Torres",
  },
  {
    title: "Measuring activation without overfitting the funnel",
    href: "/blog/activation-metrics",
    imageSrc: "/images/posts/grad-06.svg",
    category: "Product",
    date: "Nov 14, 2025",
    author: "Elena Park",
  },
  {
    title: "Why we standardized on JSON schemas for integrations",
    href: "/blog/json-schemas",
    imageSrc: "/images/posts/grad-07.svg",
    category: "Engineering",
    date: "Oct 30, 2025",
    author: "Chris Nguyen",
  },
];

export default function BlogIndex() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="py-8 md:py-10">
        <MainContainer>
          <div className="space-y-0">
            <div className="space-y-8">
              <h1 className="text-4xl font-semibold tracking-tight leading-[1.05] md:text-5xl">
                Blog
              </h1>
              <div className="space-y-3">
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <Tabs defaultValue="all">
                    <TabsList>
                      <TabsTrigger value="all">All</TabsTrigger>
                      <TabsTrigger value="engineering">Engineering</TabsTrigger>
                      <TabsTrigger value="product">Product</TabsTrigger>
                      <TabsTrigger value="company">Company</TabsTrigger>
                    </TabsList>
                  </Tabs>
                  <Input placeholder="Search posts…" className="md:w-64" />
                </div>
              </div>
            </div>
            <div className="mt-10 md:mt-12 space-y-5">
              <FeaturedPostCard
                title={featuredPost.title}
                href={featuredPost.href}
                imageSrc={featuredPost.imageSrc}
                category={featuredPost.category}
                date={featuredPost.date}
                author={featuredPost.author}
                excerpt={featuredPost.excerpt}
              />
              <div className="p-4 pt-3">
                <PostGrid>
                  {posts.map((post) => (
                    <PostCard
                      key={post.href}
                      title={post.title}
                      href={post.href}
                      imageSrc={post.imageSrc}
                      category={post.category}
                      date={post.date}
                      author={post.author}
                    />
                  ))}
                </PostGrid>
              </div>
            </div>
          </div>
        </MainContainer>
      </main>
    </div>
  );
}
