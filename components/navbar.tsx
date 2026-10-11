"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, TerminalSquare } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import ThemeToggle from "@/components/ui/theme-toggle";
import LanguageToggle from "@/components/ui/language-toggle";
import { personal } from "@/data/content";

const SECTION_IDS = [
  "about",
  "education",
  "skills",
  "projects",
  "work-documents",
  "achievements",
  "contact",
];

export default function Navbar() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const links: { id: string; label: string }[] = [
    { id: "about", label: t.nav.about },
    { id: "education", label: t.nav.education },
    { id: "skills", label: t.nav.skills },
    { id: "projects", label: t.nav.projects },
    { id: "work-documents", label: t.nav.workDocuments },
    { id: "achievements", label: t.nav.achievements },
    { id: "contact", label: t.nav.contact },
  ];

  // Si el menú móvil está abierto, cerrarlo y hacer scroll al mismo tiempo
  // provoca que la animación de colapso cancele visualmente el scroll.
  // Por eso cerramos el menú primero y esperamos a que termine su animación
  // antes de desplazarnos a la sección.
  const handleNavClick = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const scrollToSection = () => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      window.history.replaceState(null, "", `#${id}`);
    };
    if (menuOpen) {
      setMenuOpen(false);
      window.setTimeout(scrollToSection, 300);
    } else {
      scrollToSection();
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-line bg-paper/80 backdrop-blur-md dark:border-line-dark dark:bg-ink/80"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 sm:px-8 lg:px-10">
        <a href="#top" className="flex items-center gap-2 font-mono text-sm font-semibold text-ink dark:text-paper">
          <TerminalSquare className="h-5 w-5 text-primary" aria-hidden="true" />
          {personal.initials}
          <span className="text-primary">.dev</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={handleNavClick(link.id)}
                className={`relative rounded-full px-3 py-2 text-sm transition-colors ${
                  active === link.id
                    ? "text-primary"
                    : "text-muted hover:text-ink dark:text-muted-dark dark:hover:text-paper"
                }`}
              >
                {link.label}
                {active === link.id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-3 -bottom-[1px] h-[2px] rounded-full bg-primary"
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-2 sm:flex">
            <LanguageToggle />
            <ThemeToggle />
          </div>
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Menu"
            aria-expanded={menuOpen}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink dark:border-line-dark dark:text-paper lg:hidden"
          >
            {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-b border-line bg-paper dark:border-line-dark dark:bg-ink lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {links.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={handleNavClick(link.id)}
                    className="block rounded-lg px-3 py-2 text-sm text-ink hover:bg-mist dark:text-paper dark:hover:bg-surface-dark"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-2 px-3 pt-2">
                <LanguageToggle />
                <ThemeToggle />
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}