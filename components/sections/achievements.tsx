"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Award, Trophy, Medal, GraduationCap, ScrollText, ExternalLink, type LucideIcon } from "lucide-react";
import { achievements, type Certification } from "@/data/content";
import { useLanguage } from "@/context/language-context";
import SectionHeading from "@/components/ui/section-heading";
import DocumentPreviewModal from "@/components/ui/document-preview-modal";

const ICONS: Record<Certification["type"], LucideIcon> = {
  certification: Award,
  hackathon: Trophy,
  award: Medal,
  course: GraduationCap,
  degree: ScrollText,
};

export default function Achievements() {
  const { t, lang } = useLanguage();
  const [selected, setSelected] = useState<Certification | null>(null);

  return (
    <section id="achievements" className="section">
      <SectionHeading eyebrow={t.achievements.eyebrow} title={t.achievements.title} />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((item, i) => {
          const Icon = ICONS[item.type];
          const Wrapper = item.fileUrl ? motion.button : motion.div;
          const wrapperProps = item.fileUrl ? { type: "button" as const, onClick: () => setSelected(item) } : {};
          return (
            <Wrapper
              key={item.id}
              {...wrapperProps}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ y: -3 }}
              className={`card group flex gap-4 p-5 text-left ${item.fileUrl ? "cursor-pointer" : ""}`}
            >
              <span className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-primary-50 text-primary-600 dark:bg-primary-700/20 dark:text-primary-400">
                <Icon className="h-4 w-4" aria-hidden="true" />
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <p className="font-mono text-[11px] uppercase tracking-wide text-primary-600 dark:text-primary-400">
                    {t.achievements.types[item.type]}
                  </p>
                  {item.fileUrl && (
                    <ExternalLink
                      className="h-3.5 w-3.5 flex-none text-muted opacity-0 transition-opacity group-hover:opacity-100 dark:text-muted-dark"
                      aria-hidden="true"
                    />
                  )}
                </div>
                <h3 className="mt-1 font-medium text-ink dark:text-paper">{item.title[lang]}</h3>
                <p className="text-sm text-muted dark:text-muted-dark">
                  {item.issuer} · {item.date}
                </p>
                {item.fileUrl && (
                  <p className="mt-2 text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                    {t.achievements.view}
                  </p>
                )}
              </div>
            </Wrapper>
          );
        })}
      </div>

      <DocumentPreviewModal
        fileUrl={selected?.fileUrl ?? null}
        title={selected?.title[lang]}
        subtitle={selected ? `${selected.issuer} · ${selected.date}` : undefined}
        onClose={() => setSelected(null)}
        downloadLabel={t.misc.download}
        closeLabel={t.misc.close}
        noPreviewLabel={t.misc.noPreview}
      />
    </section>
  );
}


