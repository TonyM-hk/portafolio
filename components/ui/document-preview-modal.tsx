"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X, Download, FileQuestion } from "lucide-react";

const IMAGE_EXTENSIONS = ["jpg", "jpeg", "png", "webp", "gif", "svg"];

function getExtension(url: string) {
  const clean = url.split("?")[0];
  const parts = clean.split(".");
  return parts.length > 1 ? parts[parts.length - 1].toLowerCase() : "";
}

export default function DocumentPreviewModal({
  fileUrl,
  title,
  subtitle,
  onClose,
  downloadLabel,
  closeLabel,
  noPreviewLabel,
}: {
  fileUrl: string | null;
  title?: string;
  subtitle?: string;
  onClose: () => void;
  downloadLabel: string;
  closeLabel: string;
  noPreviewLabel: string;
}) {
  const ext = fileUrl ? getExtension(fileUrl) : "";
  const isImage = IMAGE_EXTENSIONS.includes(ext);
  const isPdf = ext === "pdf";

  return (
    <AnimatePresence>
      {fileUrl && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-ink/60 backdrop-blur-sm" />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="relative z-10 flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl bg-paper shadow-2xl dark:bg-ink"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-start justify-between gap-3 border-b border-line p-4 dark:border-line-dark">
              <div className="min-w-0">
                {title && <h3 className="truncate font-medium text-ink dark:text-paper">{title}</h3>}
                {subtitle && <p className="text-xs text-muted dark:text-muted-dark">{subtitle}</p>}
              </div>
              <div className="flex flex-none items-center gap-2">
                <a
                  href={fileUrl}
                  download
                  className="flex h-9 items-center gap-1.5 rounded-full border border-line px-3 text-xs font-medium text-ink transition-colors hover:border-primary hover:text-primary dark:border-line-dark dark:text-paper"
                >
                  <Download className="h-3.5 w-3.5" aria-hidden="true" />
                  {downloadLabel}
                </a>
                <button
                  onClick={onClose}
                  aria-label={closeLabel}
                  title={closeLabel}
                  className="flex h-9 w-9 flex-none items-center justify-center rounded-full text-muted transition-colors hover:bg-mist hover:text-ink dark:text-muted-dark dark:hover:bg-white/5 dark:hover:text-paper"
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-auto bg-mist dark:bg-white/5">
              {isImage && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={fileUrl} alt={title ?? ""} className="mx-auto max-h-[70vh] w-auto object-contain" />
              )}
              {isPdf && <iframe src={fileUrl} title={title ?? "document"} className="h-[70vh] w-full" />}
              {!isImage && !isPdf && (
                <div className="flex h-[40vh] flex-col items-center justify-center gap-3 text-center">
                  <FileQuestion className="h-10 w-10 text-muted dark:text-muted-dark" aria-hidden="true" />
                  <p className="max-w-xs text-sm text-muted dark:text-muted-dark">{noPreviewLabel}</p>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
