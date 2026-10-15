import { portfolio } from "@/data/portfolio";

export function Skills() {
  return (
    <section id="skills" className="section">
      <h2 className="section-title">Skills</h2>
      <ul className="flex flex-wrap gap-3">
        {portfolio.skills.map((s) => (
          <li key={s} className="badge">{s}</li>
        ))}
      </ul>
    </section>
  );
}
