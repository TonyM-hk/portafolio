"use client";

import { motion } from "framer-motion";
import { Target, Sparkles, MapPin } from "lucide-react";
import { personal } from "@/data/content";
import { useLanguage } from "@/context/language-context";
import SectionHeading from "@/components/ui/section-heading";

export default function About() {
  const { t, lang } = useLanguage();

  return (
    <section id="about" className="section">
      <SectionHeading eyebrow={t.about.eyebrow} title={t.about.title} />

      <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          {personal.about[lang].map((paragraph, i) => (
            <p key={i} className="leading-relaxed text-muted dark:text-muted-dark">
              {paragraph}
            </p>
          ))}
          <div className="flex items-center gap-2 pt-2 font-mono text-sm text-muted dark:text-muted-dark">
            <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
            {personal.location[lang]}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-4"
        >
          <div className="card p-6">
            <div className="mb-3 flex items-center gap-2">
              <Target className="h-4 w-4 text-primary" aria-hidden="true" />
              <h3 className="font-medium text-ink dark:text-paper">{t.about.objectivesTitle}</h3>
            </div>
            <p className="text-sm leading-relaxed text-muted dark:text-muted-dark">
              {personal.objectives[lang]}
            </p>
          </div>

          <div className="card p-6">
            <div className="mb-3 flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-primary" aria-hidden="true" />
              <h3 className="font-medium text-ink dark:text-paper">{t.about.interestsTitle}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {personal.interests[lang].map((interest) => (
                <span
                  key={interest}
                  className="rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-600 dark:bg-primary-700/20 dark:text-primary-400"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
