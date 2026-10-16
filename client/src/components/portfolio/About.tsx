import { portfolio } from "@/data/portfolio";
                                                          //skills section
export function About() {
  return (
    <section id="about" className="section">
      <h2 className="section-title">About</h2>
      <div className="grid items-center gap-10 md:grid-cols-[240px_1fr]">
        <div className="mx-auto flex aspect-square w-56 items-center justify-center overflow-hidden rounded-3xl border border-border bg-secondary shadow-soft">
          {portfolio.photo ? (
            <img src={portfolio.photo} alt={portfolio.name} className="h-full w-full object-cover" />
          ) : (
            <span className="font-display text-6xl text-primary">{portfolio.name[0]}</span>
          )}
        </div>
        <p className="text-lg leading-relaxed text-foreground/85">{portfolio.bio}</p>
      </div>
    </section>
  );
}
