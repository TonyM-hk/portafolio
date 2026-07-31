"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  FileArchive,
  FileCode2,
  FileImage,
  File as FileIcon,
  Eye,
  type LucideIcon,
} from "lucide-react";
import { workDocuments, workDocumentCategories, type WorkDocument, type WorkDocumentFileType } from "@/data/content";
import { useLanguage } from "@/context/language-context";
import SectionHeading from "@/components/ui/section-heading";
import DocumentPreviewModal from "@/components/ui/document-preview-modal";

const FILE_ICONS: Record<WorkDocumentFileType, LucideIcon> = {
  pdf: FileText,
  doc: FileText,
  zip: FileArchive,
  code: FileCode2,
  image: FileImage,
  other: FileIcon,
};

export default function WorkDocuments() {
  const { t, lang } = useLanguage();
  const [selected, setSelected] = useState<WorkDocument | null>(null);

  // Si no hay documentos cargados todavía, la sección no se muestra.
  if (workDocuments.length === 0) return null;

  return (
    <section id="work-documents" className="section">
      <SectionHeading
        eyebrow={t.workDocuments.eyebrow}
        title={t.workDocuments.title}
        subtitle={t.workDocuments.subtitle}
      />

      <motion.div layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {workDocuments.map((doc, i) => {
            const Icon = FILE_ICONS[doc.fileType];
            const category = workDocumentCategories.find((c) => c.key === doc.categoryKey);
            return (
              <motion.button
                key={doc.id}
                type="button"
                onClick={() => setSelected(doc)}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                whileHover={{ y: -4 }}
                className="card group flex cursor-pointer flex-col gap-4 p-5 text-left"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-primary-50 text-primary-600 dark:bg-primary-700/20 dark:text-primary-400">
                    <Icon className="h-4.5 w-4.5" aria-hidden="true" />
                  </span>
                  {category && (
                    <span className="rounded-full bg-mist px-2.5 py-1 font-mono text-[11px] text-muted dark:bg-white/10 dark:text-muted-dark">
                      {category.label[lang]}
                    </span>
                  )}
                </div>

                <div className="flex-1">
                  <h3 className="font-medium text-ink dark:text-paper">{doc.title[lang]}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted dark:text-muted-dark">
                    {doc.description[lang]}
                  </p>
                </div>

                {doc.tech && doc.tech.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {doc.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-mist px-2 py-0.5 font-mono text-[11px] text-muted dark:bg-white/10 dark:text-muted-dark"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex items-center justify-between border-t border-line pt-4 dark:border-line-dark">
                  {doc.date && (
                    <span className="font-mono text-xs text-muted dark:text-muted-dark">{doc.date}</span>
                  )}
                  <span className="ml-auto inline-flex items-center gap-1.5 text-sm font-medium text-primary group-hover:text-primary-600">
                    <Eye className="h-3.5 w-3.5" aria-hidden="true" />
                    {t.workDocuments.view}
                  </span>
                </div>
              </motion.button>
            );
          })}
        </AnimatePresence>
      </motion.div>

      <DocumentPreviewModal
        fileUrl={selected?.fileUrl ?? null}
        title={selected?.title[lang]}
        subtitle={selected?.date}
        onClose={() => setSelected(null)}
        downloadLabel={t.misc.download}
        closeLabel={t.misc.close}
        noPreviewLabel={t.misc.noPreview}
      />
    </section>
  );
}
