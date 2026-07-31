"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github, Star, X, Play, CheckCircle2, FileText } from "lucide-react";
import { projects, type Project } from "@/data/content";
import { useLanguage } from "@/context/language-context";
import SectionHeading from "@/components/ui/section-heading";

type FilterKey = "all" | "web" | "mobile" | "backend" | "frontend";

export default function Projects() {
  const { t, lang } = useLanguage();
  const [filter, setFilter] = useState<FilterKey>("all");
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered = useMemo<Project[]>(() => {
    if (filter === "all") return projects;
    return projects.filter((p) => p.categories.includes(filter));
  }, [filter]);

  const filters: FilterKey[] = ["all", "web", "mobile", "backend", "frontend"];

  const openProject = (project: Project) => setSelected(project);
  const closeProject = () => setSelected(null);

  return (
    <section id="projects" className="section">
      <SectionHeading eyebrow={t.projects.eyebrow} title={t.projects.title} subtitle={t.projects.subtitle} />

      <div className="mb-8 flex flex-wrap gap-2" role="tablist" aria-label="Project filters">
        {filters.map((key) => (
          <button
            key={key}
            role="tab"
            aria-selected={filter === key}
            onClick={() => setFilter(key)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              filter === key
                ? "bg-primary text-white"
                : "border border-line text-muted hover:border-primary hover:text-primary dark:border-line-dark dark:text-muted-dark"
            }`}
          >
            {t.projects.filters[key]}
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <motion.article
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
              whileHover={{ y: -4 }}
              onClick={() => openProject(project)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") openProject(project);
              }}
              className="card group flex cursor-pointer flex-col overflow-hidden text-left"
            >
              <div className="relative h-40 w-full overflow-hidden bg-mist dark:bg-white/5">
                <Image
                  src={project.image}
                  alt={project.name[lang]}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {project.featured && (
                  <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-ink/80 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur">
                    <Star className="h-3 w-3 fill-current" aria-hidden="true" />
                    {t.projects.featured}
                  </span>
                )}
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-medium text-ink dark:text-paper">{project.name[lang]}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted dark:text-muted-dark">
                  {project.description[lang]}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-mist px-2 py-0.5 font-mono text-[11px] text-muted dark:bg-white/10 dark:text-muted-dark"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Los links ya no abren el modal, evitamos que el click se propague */}
                {(project.demoUrl || project.githubUrl) && (
                  <div className="mt-5 flex gap-3" onClick={(e) => e.stopPropagation()}>
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary-600"
                      >
                        <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                        {t.projects.demo}
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-ink dark:text-muted-dark dark:hover:text-paper"
                      >
                        <Github className="h-3.5 w-3.5" aria-hidden="true" />
                        {t.projects.code}
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      <ProjectModal project={selected} lang={lang} t={t} onClose={closeProject} />
    </section>
  );
}

// ---------------------------------------------------------------------------
// MODAL DE DETALLE DEL PROYECTO
// ---------------------------------------------------------------------------

function ProjectModal({
  project,
  lang,
  t,
  onClose,
}: {
  project: Project | null;
  lang: "es" | "en";
  t: any;
  onClose: () => void;
}) {
  // Índice de la imagen activa en la galería. -1 significa "mostrando el video".
  const [activeMedia, setActiveMedia] = useState(0);

  // Todas las imágenes disponibles: la principal + la galería (sin duplicados).
  const images = useMemo(() => {
    if (!project) return [];
    const list = [project.image, ...(project.gallery ?? [])];
    return Array.from(new Set(list));
  }, [project]);

  const handleClose = () => {
    onClose();
    setTimeout(() => setActiveMedia(0), 200);
  };

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={handleClose}
        >
          <div className="absolute inset-0 bg-ink/60 backdrop-blur-sm" />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="relative z-10 max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-paper shadow-2xl dark:bg-ink"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
          >
            <button
              onClick={handleClose}
              aria-label="Cerrar"
              className="absolute right-4 top-4 z-20 rounded-full bg-ink/70 p-1.5 text-white backdrop-blur hover:bg-ink"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Media principal: video (si está seleccionado) o imagen */}
            <div className="relative h-56 w-full overflow-hidden bg-mist dark:bg-white/5 sm:h-72">
              {project.video && activeMedia === -1 ? (
                <VideoPlayer src={project.video} title={project.name[lang]} />
              ) : (
                <Image
                  src={images[activeMedia] ?? project.image}
                  alt={project.name[lang]}
                  fill
                  sizes="(max-width: 768px) 100vw, 700px"
                  className="object-cover"
                />
              )}
              {project.featured && (
                <span className="absolute left-4 top-4 flex items-center gap-1 rounded-full bg-ink/80 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur">
                  <Star className="h-3 w-3 fill-current" aria-hidden="true" />
                  {t.projects.featured}
                </span>
              )}
            </div>

            {/* Tira de miniaturas: imágenes de la galería + botón de video si existe */}
            {(images.length > 1 || project.video) && (
              <div className="flex gap-2 overflow-x-auto border-b border-line p-3 dark:border-line-dark">
                {images.map((src, idx) => (
                  <button
                    key={src + idx}
                    onClick={() => setActiveMedia(idx)}
                    className={`relative h-14 w-20 flex-shrink-0 overflow-hidden rounded-lg border-2 transition-colors ${
                      activeMedia === idx
                        ? "border-primary"
                        : "border-transparent opacity-70 hover:opacity-100"
                    }`}
                  >
                    <Image src={src} alt={`${project.name[lang]} ${idx + 1}`} fill className="object-cover" />
                  </button>
                ))}
                {project.video && (
                  <button
                    onClick={() => setActiveMedia(-1)}
                    className={`relative flex h-14 w-20 flex-shrink-0 items-center justify-center overflow-hidden rounded-lg border-2 bg-ink transition-colors ${
                      activeMedia === -1
                        ? "border-primary"
                        : "border-transparent opacity-70 hover:opacity-100"
                    }`}
                  >
                    <Play className="h-5 w-5 fill-white text-white" />
                  </button>
                )}
              </div>
            )}

            <div className="p-6">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <h3 id="project-modal-title" className="text-xl font-semibold text-ink dark:text-paper">
                  {project.name[lang]}
                </h3>
                {project.duration && (
                  <span className="rounded-full bg-mist px-3 py-1 text-xs font-medium text-muted dark:bg-white/10 dark:text-muted-dark">
                    {project.duration}
                  </span>
                )}
              </div>

              {project.role && (
                <p className="mt-1 text-sm font-medium text-primary">{project.role[lang]}</p>
              )}

              <p className="mt-4 text-sm leading-relaxed text-muted dark:text-muted-dark">
                {project.longDescription?.[lang] ?? project.description[lang]}
              </p>

              {project.highlights && project.highlights[lang]?.length > 0 && (
                <ul className="mt-5 space-y-2">
                  {project.highlights[lang].map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted dark:text-muted-dark">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" aria-hidden="true" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-5 flex flex-wrap gap-1.5">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-mist px-2 py-0.5 font-mono text-[11px] text-muted dark:bg-white/10 dark:text-muted-dark"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.documents && project.documents.length > 0 && (
                <div className="mt-5">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted dark:text-muted-dark">
                    {lang === "es" ? "Evidencias" : "Evidence"}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.documents.map((doc, idx) => (
                      <a
                        key={idx}
                        href={doc.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-line px-3 py-1.5 text-xs font-medium text-ink hover:border-primary hover:text-primary dark:border-line-dark dark:text-paper"
                      >
                        <FileText className="h-3.5 w-3.5" aria-hidden="true" />
                        {doc.label[lang]}
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {(project.demoUrl || project.githubUrl) && (
                <div className="mt-6 flex gap-3">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-600"
                    >
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                      {t.projects.demo}
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-line px-4 py-2 text-sm font-medium text-ink hover:border-primary hover:text-primary dark:border-line-dark dark:text-paper"
                    >
                      <Github className="h-3.5 w-3.5" aria-hidden="true" />
                      {t.projects.code}
                    </a>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Reproductor de video: detecta si es un link de YouTube embebido o un .mp4 local.
function VideoPlayer({ src, title }: { src: string; title: string }) {
  if (src.includes("youtube.com/embed")) {
    return (
      <iframe
        src={src}
        title={title}
        className="h-full w-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }
  return <video src={src} controls className="h-full w-full object-cover" />;
}