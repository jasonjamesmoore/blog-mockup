export function SiteHeader() {
  return (
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
  );
}
