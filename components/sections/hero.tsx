"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, FolderGit2, FileText } from "lucide-react";
import { personal } from "@/data/content";
import { useLanguage } from "@/context/language-context";
import EditorWindow from "@/components/ui/editor-window";

export default function Hero() {
  const { t, lang } = useLanguage();

  return (
    <section id="top" className="relative overflow-hidden pt-16">
      <div className="grid-backdrop pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" />

      <div className="section grid items-center gap-14 pb-24 pt-16 lg:grid-cols-[1.1fr_1fr] lg:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            {personal.availability[lang]}
          </span>

          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-ink dark:text-paper sm:text-5xl lg:text-6xl">
            {t.hero.greeting}{" "}
            <span className="bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
              {personal.name}
            </span>
          </h1>

          <p className="mt-4 font-mono text-lg text-primary-600 dark:text-primary-400">
            {personal.role[lang]}
          </p>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted dark:text-muted-dark sm:text-lg">
            {personal.tagline[lang]}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href={personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-primary hover:text-primary dark:border-line-dark dark:text-paper dark:hover:border-primary-400 dark:hover:text-primary-400"
            >
              <FileText className="h-4 w-4" aria-hidden="true" />
              {t.hero.viewCta}
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href={personal.resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-white shadow-glow transition-colors hover:bg-primary-600"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              {t.hero.downloadCta}
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-primary hover:text-primary dark:border-line-dark dark:text-paper dark:hover:border-primary-400 dark:hover:text-primary-400"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              {t.hero.contactCta}
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-muted transition-colors hover:text-ink dark:text-muted-dark dark:hover:text-paper"
            >
              <FolderGit2 className="h-4 w-4" aria-hidden="true" />
              {t.hero.projectsCta}
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          className="relative"
        >
          <div className="animate-float">
            <EditorWindow />
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs text-muted dark:text-muted-dark sm:flex"
      >
        {t.hero.scroll}
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        >
          <ArrowDown className="h-4 w-4" aria-hidden="true" />
        </motion.span>
      </motion.a>
    </section>
  );
}
