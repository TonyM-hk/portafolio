"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { personal } from "@/data/content";
import { useLanguage } from "@/context/language-context";

export default function WhatsAppButton() {
  const { t } = useLanguage();

  return (
    <motion.a
      href={`https://wa.me/${personal.whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.misc.whatsapp}
      title={t.misc.whatsapp}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.4, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 left-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-soft dark:shadow-soft-dark"
    >
      <MessageCircle className="h-6 w-6" strokeWidth={2} aria-hidden="true" />
    </motion.a>
  );
}
