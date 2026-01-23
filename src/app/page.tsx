import { MainContainer } from "@/components/main-container";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      <SiteHeader />
      <main className="py-10">
        <MainContainer>
          <div className="space-y-6">
            <div className="space-y-1">
              <h1>Blog</h1>
              <p>Short description placeholder.</p>
            </div>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="space-y-2">
                  <div className="aspect-video w-full rounded-lg border border-dashed border-zinc-200" />
                  <div className="space-y-2">
                    <div className="font-medium text-black">
                      Post title placeholder goes here
                    </div>
                    <div className="text-xs text-zinc-500">
                      Category · Date · Author
                    </div>
                    <div className="text-sm text-zinc-700">
                      Short excerpt placeholder that should wrap to a couple of
                      lines to keep card heights consistent.
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </MainContainer>
      </main>
    </div>
  );
}
