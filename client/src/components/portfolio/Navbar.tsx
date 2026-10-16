import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { navLinks, portfolio } from "@/data/portfolio";                 //skills section

export function Navbar() {
  const [dark, setDark] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setDark(localStorage.getItem("theme") === "dark");
  }, []);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
        <a href="#home" className="font-display text-xl font-semibold text-foreground">
          {portfolio.name}<span className="text-primary">.</span>
        </a>
        <div className="flex items-center gap-2">
          <ul className="hidden gap-1 md:flex">
            {navLinks.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} className="nav-link">{l.label}</a>
              </li>
            ))}
          </ul>
          <button aria-label="Toggle theme" onClick={() => setDark(!dark)} className="icon-btn">
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button aria-label="Menu" onClick={() => setOpen(!open)} className="icon-btn md:hidden">
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>
      {open && (
        <ul className="flex flex-col gap-1 border-t border-border px-5 py-3 md:hidden">
          {navLinks.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`} onClick={() => setOpen(false)} className="nav-link block">{l.label}</a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
