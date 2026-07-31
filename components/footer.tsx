"use client";

import { Github, Linkedin, Mail, TerminalSquare } from "lucide-react";
import { personal } from "@/data/content";
import { useLanguage } from "@/context/language-context";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  const socials = [
    { icon: Github, href: personal.github, label: "GitHub" },
    { icon: Linkedin, href: personal.linkedin, label: "LinkedIn" },
    { icon: Mail, href: `mailto:${personal.email}`, label: "Email" },
  ];

  return (
    <footer className="border-t border-line dark:border-line-dark">
      <div className="section flex flex-col items-center gap-6 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
        <a href="#top" className="flex items-center gap-2 font-mono text-sm font-semibold text-ink dark:text-paper">
          <TerminalSquare className="h-4 w-4 text-primary" aria-hidden="true" />
          {personal.initials}
          <span className="text-primary">.dev</span>
        </a>

        <div className="flex items-center gap-3">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-primary hover:text-primary dark:border-line-dark dark:text-muted-dark"
            >
              <Icon className="h-4 w-4" aria-hidden="true" />
            </a>
          ))}
        </div>

        <p className="text-xs text-muted dark:text-muted-dark">
          © {year} {personal.name}. {t.footer.rights}
          <br />
          {t.footer.builtWith}
        </p>
      </div>
    </footer>
  );
}
