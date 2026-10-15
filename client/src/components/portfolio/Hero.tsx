import { portfolio } from "@/data/portfolio";

export function Hero() {
  return (
    <section id="home" className="section flex min-h-screen items-center pt-24">
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">Hello, I'm</p>
        <h1 className="font-display text-6xl font-semibold text-foreground md:text-8xl">{portfolio.name}</h1>
        <h2 className="mt-4 text-xl text-muted-foreground md:text-2xl">{portfolio.title}</h2>
        <p className="mt-6 max-w-xl text-lg text-foreground/80">{portfolio.tagline}</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a href={portfolio.projectsUrl} target="_blank" rel="noreferrer" className="btn-primary">View Projects</a>
          <a href="#contact" className="btn-outline">Contact Me</a>
        </div>
      </div>
    </section>
  );
}
