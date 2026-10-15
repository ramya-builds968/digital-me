import { useState, type FormEvent } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { z } from "zod";
import { portfolio } from "@/data/portfolio";

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  message: z.string().trim().min(1, "Please write a message").max(1000),
});

export function Contact() {
  const [error, setError] = useState("");
  const { github, linkedin, email } = portfolio.contact;

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const result = schema.safeParse(data);
    if (!result.success) return setError(result.error.issues[0]?.message ?? "Please check the form");
    setError("");
    const { name, email: from, message } = result.data;
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${from})`);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="section">
      <h2 className="section-title">Contact</h2>
      <div className="grid gap-10 md:grid-cols-[1fr_260px]">
        <form onSubmit={onSubmit} className="space-y-4">
          <input name="name" placeholder="Your name" className="field" maxLength={100} />
          <input name="email" type="email" placeholder="Your email" className="field" maxLength={255} />
          <textarea name="message" rows={5} placeholder="Your message" className="field resize-none" maxLength={1000} />
          {error && <p className="text-sm text-destructive">{error}</p>}
          <button type="submit" className="btn-primary">Send Message</button>
        </form>
        <div className="space-y-3">
          <a href={github} target="_blank" rel="noreferrer" className="contact-link"><Github size={18} /> GitHub</a>
          <a href={linkedin} target="_blank" rel="noreferrer" className="contact-link"><Linkedin size={18} /> LinkedIn</a>
          <a href={`mailto:${email}`} className="contact-link break-all"><Mail size={18} /> {email}</a>
        </div>
      </div>
    </section>
  );
}
