export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      <header className="py-6">
        <div className="mx-auto flex w-full max-w-3xl items-center justify-between px-6">
          <div>Blog</div>
          <nav className="flex items-center gap-4">
            <span>Home</span>
            <span>About</span>
          </nav>
          <div>Theme</div>
        </div>
      </header>
      <main className="py-10">
        <div className="mx-auto w-full max-w-3xl px-6">
          <div className="space-y-6">
            <div className="space-y-1">
              <h1>Blog</h1>
              <p>Short description placeholder.</p>
            </div>
            <div>Post grid placeholder.</div>
          </div>
        </div>
      </main>
    </div>
  );
}
