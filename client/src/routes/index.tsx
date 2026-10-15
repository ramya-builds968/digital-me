import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Contact } from "@/components/portfolio/Contact";
import { portfolio } from "@/data/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ramya — Full Stack Developer (MERN)" },
      { name: "description", content: "Portfolio of Ramya, a MERN full stack developer building web apps with React, Node.js and MongoDB." },
      { property: "og:title", content: "Ramya — Full Stack Developer (MERN)" },
      { property: "og:description", content: "Portfolio of Ramya, a MERN full stack developer." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Contact />
      </main>
      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} {portfolio.name}
      </footer>
    </div>
  );
}
