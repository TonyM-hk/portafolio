"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  Brain,
  Puzzle,
  Calculator,
  Lightbulb,
  Users,
  MessageSquare,
  Shuffle,
  Sparkles,
  Clock,
  Search,
  Rocket,
  Plus,
  type LucideIcon,
} from "lucide-react";
import { education, softSkills, type SoftSkill } from "@/data/content";
import { useLanguage } from "@/context/language-context";
import SectionHeading from "@/components/ui/section-heading";

const SKILL_ICONS: Record<SoftSkill["icon"], LucideIcon> = {
  puzzle: Puzzle,
  calculator: Calculator,
  lightbulb: Lightbulb,
  users: Users,
  message: MessageSquare,
  shuffle: Shuffle,
  sparkles: Sparkles,
  clock: Clock,
  search: Search,
  rocket: Rocket,
};

// Paleta que rota por tarjeta para darle variedad visual al grid.
const THEMES = [
  { bg: "bg-primary-50 dark:bg-primary-700/20", text: "text-primary-600 dark:text-primary-400" },
  { bg: "bg-purple-50 dark:bg-purple-500/10", text: "text-purple-600 dark:text-purple-400" },
  { bg: "bg-emerald-50 dark:bg-emerald-500/10", text: "text-emerald-600 dark:text-emerald-400" },
  { bg: "bg-amber-50 dark:bg-amber-500/10", text: "text-amber-600 dark:text-amber-400" },
  { bg: "bg-pink-50 dark:bg-pink-500/10", text: "text-pink-600 dark:text-pink-400" },
];

export default function Education() {
  const { t, lang } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="education" className="section">
      <SectionHeading eyebrow={t.education.eyebrow} title={t.education.title} />

      <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45 }}
          className="space-y-4"
        >
          {education.map((item) => (
            <div key={item.id} className="card flex gap-4 p-6">
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-primary-50 text-primary-600 dark:bg-primary-700/20 dark:text-primary-400">
                <GraduationCap className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-medium text-ink dark:text-paper">{item.institution}</h3>
                <p className="mt-1 text-sm text-muted dark:text-muted-dark">{item.degree[lang]}</p>
                <p className="mt-1 font-mono text-xs text-primary-600 dark:text-primary-400">{item.period[lang]}</p>
                {item.description && (
                  <p className="mt-2 text-sm leading-relaxed text-muted dark:text-muted-dark">
                    {item.description[lang]}
                  </p>
                )}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="card p-6"
        >
          <div className="mb-4 flex items-center gap-2">
            <Brain className="h-4 w-4 text-primary" aria-hidden="true" />
            <h3 className="font-medium text-ink dark:text-paper">{t.education.softSkillsTitle}</h3>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {softSkills.map((skill, i) => {
              const Icon = SKILL_ICONS[skill.icon];
              const theme = THEMES[i % THEMES.length];
              const isOpen = openIndex === i;
              return (
                <motion.button
                  key={skill.title.en}
                  type="button"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.35, delay: i * 0.04 }}
                  whileHover={{ y: -2 }}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className={`group flex flex-col rounded-xl border p-3 text-left transition-colors ${
                    isOpen
                      ? "border-primary/40 bg-mist dark:bg-white/5"
                      : "border-line hover:border-primary/40 dark:border-line-dark"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`flex h-8 w-8 flex-none items-center justify-center rounded-lg transition-transform group-hover:scale-110 group-hover:rotate-6 ${theme.bg} ${theme.text}`}
                    >
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-muted dark:text-muted-dark"
                    >
                      <Plus className="h-3.5 w-3.5" aria-hidden="true" />
                    </motion.span>
                  </div>
                  <p className="mt-2 text-xs font-medium leading-tight text-ink dark:text-paper">
                    {skill.title[lang]}
                  </p>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.p
                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                        animate={{ opacity: 1, height: "auto", marginTop: 6 }}
                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden text-[11px] leading-snug text-muted dark:text-muted-dark"
                      >
                        {skill.description[lang]}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.button>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
