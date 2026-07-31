"use client";

import { motion } from "framer-motion";
import { GitCommitHorizontal } from "lucide-react";
import { experience } from "@/data/content";
import { useLanguage } from "@/context/language-context";
import SectionHeading from "@/components/ui/section-heading";

export default function Experience() {
  const { t, lang } = useLanguage();

  return (
    <section id="experience" className="section">
      <SectionHeading eyebrow={t.experience.eyebrow} title={t.experience.title} />

      <div className="relative border-l border-line pl-8 dark:border-line-dark sm:pl-10">
        {experience.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            className="relative pb-12 last:pb-0"
          >
            <span className="absolute -left-[41px] flex h-8 w-8 items-center justify-center rounded-full border border-line bg-paper text-primary dark:border-line-dark dark:bg-ink sm:-left-[49px]">
              <GitCommitHorizontal className="h-4 w-4" aria-hidden="true" />
            </span>

            <div className="card p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-medium text-ink dark:text-paper">
                  {item.role[lang]} <span className="text-muted dark:text-muted-dark">· {item.company}</span>
                </h3>
                <span className="font-mono text-xs text-muted dark:text-muted-dark">{item.period[lang]}</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted dark:text-muted-dark">
                {item.description[lang]}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {item.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-mist px-2 py-0.5 font-mono text-[11px] text-muted dark:bg-white/10 dark:text-muted-dark"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
