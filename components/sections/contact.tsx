"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MessageCircle, Phone } from "lucide-react";
import { personal } from "@/data/content";
import { useLanguage } from "@/context/language-context";
import SectionHeading from "@/components/ui/section-heading";

export default function Contact() {
  const { t } = useLanguage();

  const directLinks = [
    { icon: Mail, label: personal.email, href: `mailto:${personal.email}` },
    { icon: Phone, label: personal.phoneDisplay, href: `tel:${personal.whatsappNumber}` },
    { icon: MessageCircle, label: "WhatsApp", href: `https://wa.me/${personal.whatsappNumber}` },
    { icon: Github, label: "GitHub", href: personal.github },
    // { icon: Linkedin, label: "LinkedIn", href: personal.linkedin },
  ];

  return (
    <section id="contact" className="section">
      <SectionHeading
        eyebrow={t.contact.eyebrow}
        title={t.contact.title}
        subtitle={t.contact.subtitle}
        align="center"
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.45 }}
        className="card mx-auto max-w-xl p-6 sm:p-8"
      >
        <ul className="space-y-2">
          {directLinks.map(({ icon: Icon, label, href }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-muted transition-colors hover:bg-mist hover:text-ink dark:text-muted-dark dark:hover:bg-white/5 dark:hover:text-paper"
              >
                <span className="flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-primary-50 text-primary-600 dark:bg-primary-700/20 dark:text-primary-400">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
