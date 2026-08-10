export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur">
        <nav
          data-testid="landing-nav"
          className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4"
        >
          <div className="text-lg font-semibold">Pairwise Evaluation System for Students</div>
          <div className="flex items-center gap-4 text-sm text-slate-600">
            <a href="#" className="hover:text-slate-900">
              Home
            </a>
            <a href="#" className="hover:text-slate-900">
              Features
            </a>
            <a href="#" className="hover:text-slate-900">
              About
            </a>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-16">
        <section className="grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-sky-700">
              University Evaluation System
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              Compare candidates fairly with a clean pairwise workflow.
            </h1>
            <p className="max-w-xl text-base leading-7 text-slate-600">
              A simple landing page for a university pairwise evaluation platform,
              designed to highlight the service and provide a clear starting point
              for the main feature.
            </p>
            <a
              data-testid="main-cta"
              href="#"
              className="inline-flex items-center rounded-full bg-sky-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-800"
            >
              Explore the Feature
            </a>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-slate-500">Main feature placeholder</p>
            <div className="mt-4 rounded-xl border border-dashed border-slate-300 bg-slate-50 p-10 text-center text-slate-600">
              Pairwise evaluation workspace
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
