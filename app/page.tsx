export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 pixel-grid-bg">
      <h1 className="text-5xl font-bold text-mist-100">
        Pixel <span className="text-signal-500">Nox</span>
      </h1>
      <p className="text-mist-300 font-mono text-sm">
        Phase 0 — design tokens are live.
      </p>
      <div className="flex gap-3">
        <div className="w-10 h-10 rounded bg-signal-500" />
        <div className="w-10 h-10 rounded bg-nox-500" />
        <div className="w-10 h-10 rounded bg-gold-400" />
        <div className="w-10 h-10 rounded bg-ink-700 border border-ink-600" />
      </div>
    </main>
  );
}
