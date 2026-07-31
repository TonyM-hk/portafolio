"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/data/content";
import { useLanguage } from "@/context/language-context";
import SectionHeading from "@/components/ui/section-heading";

export default function Testimonials() {
  const { t, lang } = useLanguage();
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setIndex((i) => (i + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const go = (dir: 1 | -1) => {
    setDirection(dir);
    setIndex((i) => (i + dir + testimonials.length) % testimonials.length);
  };

  const current = testimonials[index];

  return (
    <section id="testimonials" className="section">
      <SectionHeading eyebrow={t.testimonials.eyebrow} title={t.testimonials.title} align="center" />

      <div className="relative mx-auto max-w-2xl">
        <div className="card relative overflow-hidden p-8 sm:p-10">
          <Quote className="h-8 w-8 text-primary-100 dark:text-primary-700/30" aria-hidden="true" />
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current.id}
              custom={direction}
              initial={{ opacity: 0, x: direction * 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -direction * 24 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <p className="mt-4 text-lg leading-relaxed text-ink dark:text-paper">
                “{current.quote[lang]}”
              </p>
              <div className="mt-6 flex items-center gap-3">
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold text-white"
                  style={{ backgroundColor: current.avatarColor }}
                  aria-hidden="true"
                >
                  {current.name
                    .split(" ")
                    .slice(0, 2)
                    .map((n) => n[0])
                    .join("")}
                </span>
                <div>
                  <p className="text-sm font-medium text-ink dark:text-paper">{current.name}</p>
                  <p className="text-xs text-muted dark:text-muted-dark">
                    {current.role[lang]} · {current.company}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink hover:border-primary hover:text-primary dark:border-line-dark dark:text-paper"
          >
            <ChevronLeft className="h-4 w-4" aria-hidden="true" />
          </button>
          <div className="flex gap-1.5">
            {testimonials.map((item, i) => (
              <button
                key={item.id}
                aria-label={`Go to testimonial ${i + 1}`}
                onClick={() => {
                  setDirection(i > index ? 1 : -1);
                  setIndex(i);
                }}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-6 bg-primary" : "w-1.5 bg-line dark:bg-line-dark"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink hover:border-primary hover:text-primary dark:border-line-dark dark:text-paper"
          >
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
