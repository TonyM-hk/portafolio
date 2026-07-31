"use client";

import { motion } from "framer-motion";
import { Layout, Server, Database, Wrench } from "lucide-react";
import { skillCategories } from "@/data/content";
import { useLanguage } from "@/context/language-context";
import SectionHeading from "@/components/ui/section-heading";

const ICONS: Record<string, typeof Layout> = {
  frontend: Layout,
  backend: Server,
  database: Database,
  tools: Wrench,
};

export default function Skills() {
  const { t, lang } = useLanguage();

  return (
    <section id="skills" className="section">
      <SectionHeading eyebrow={t.skills.eyebrow} title={t.skills.title} subtitle={t.skills.subtitle} />

      <div className="grid gap-6 sm:grid-cols-2">
        {skillCategories.map((category, catIndex) => {
          const Icon = ICONS[category.key] ?? Layout;
          return (
            <motion.div
              key={category.key}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: catIndex * 0.05 }}
              className="card p-6"
            >
              <div className="mb-5 flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-50 text-primary-600 dark:bg-primary-700/20 dark:text-primary-400">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <h3 className="font-mono text-sm font-medium text-ink dark:text-paper">
                  {category.label[lang]}
                </h3>
              </div>

              <ul className="space-y-4">
                {category.items.map((skill, i) => (
                  <li key={skill.name}>
                    <div className="mb-1.5 flex items-center justify-between text-sm">
                      <span className="text-ink dark:text-paper">{skill.name}</span>
                      <span className="font-mono text-xs text-muted dark:text-muted-dark">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-mist dark:bg-white/10">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 + i * 0.06, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-to-r from-primary-400 to-primary-600"
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
