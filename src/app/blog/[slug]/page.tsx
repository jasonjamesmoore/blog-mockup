import Image from "next/image";

import { MainContainer } from "@/components/main-container";
import { PostMeta } from "@/components/blog/post-meta";
import { SiteHeader } from "@/components/site-header";

const post = {
  title: "Designing a unified event pipeline for product telemetry",
  category: "Engineering",
  date: "Jan 8, 2026",
  author: "Avery Patel",
  summary:
    "A practical look at how we merged analytics, audit logs, and in-product events into one resilient stream without slowing product velocity.",
  imageSrc: "/images/posts/grad-01.svg",
};

export default function BlogPostPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="py-12">
        <MainContainer>
          <article className="space-y-10 md:space-y-12">
            {/* Reading column */}
            <header className="mx-auto w-full max-w-2xl space-y-3 md:space-y-4">
              <PostMeta
                author={post.author}
                date={post.date}
                category={post.category}
                showAvatar
              />
              <h1 className="text-4xl font-semibold tracking-tight leading-[1.05] md:text-5xl">
                {post.title}
              </h1>
              <p className="text-lg text-muted-foreground">{post.summary}</p>
            </header>

            {/* Hero */}

            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg border border-border bg-muted md:mb-6">
              <Image
                src={post.imageSrc}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 60vw, 100vw"
              />
            </div>
            {/* Prose */}
            <div className="mx-auto w-full max-w-2xl">
              <div className="prose prose-neutral dark:prose-invert prose-lg">
                <p>
                  We needed a single event pipeline that could power analytics,
                  auditing, and in-product personalization without ballooning
                  operational complexity. The previous system had grown into
                  three parallel streams with separate schemas and retention
                  rules, making it difficult to reason about data quality and
                  latency.
                </p>
                <h2>Start with the data contracts</h2>
                <p>
                  The first change was to formalize event contracts. We
                  introduced a lightweight schema registry and enforced
                  validation at the edge. This reduced drift, improved
                  observability, and made downstream consumers predictable.
                </p>
                <ul>
                  <li>Typed event definitions with clear ownership.</li>
                  <li>Versioning rules for backward compatibility.</li>
                  <li>
                    Automated validation and sampling in the ingestion layer.
                  </li>
                </ul>
                <h2>Unify routing, not destinations</h2>
                <p>
                  We kept analytics, audit, and product signals distinct in
                  their destinations, but unified the routing logic. A single
                  pipeline now fans out to purpose-built sinks with consistent
                  semantics, which reduced operational toil and made new use
                  cases easier to launch.
                </p>
                <pre>
                  <code>{`event -> validate -> enrich -> route -> sink`}</code>
                </pre>
                <h3>Measure success with latency and coverage</h3>
                <p>
                  We track pipeline latency end-to-end and use coverage metrics
                  to confirm that critical events arrive reliably. The result is
                  a stream that supports both experimentation and compliance
                  with the same foundational data.
                </p>
                <p>
                  The overall impact has been fewer ingestion failures, faster
                  product instrumentation, and much clearer ownership across
                  teams.
                </p>
              </div>
            </div>
          </article>
        </MainContainer>
      </main>
    </div>
  );
}
