"use client";

import { motion, Easing } from "framer-motion";
import { useLocale } from "@/hooks/use-locale-context";

interface SectionSeparatorProps {
  variant?: "default" | "subtle" | "accent";
  className?: string;
}

export function SectionSeparator({
  variant = "default",
  className = "",
}: SectionSeparatorProps) {
  const { locale } = useLocale();

  const separatorVariants = {
    hidden: { opacity: 0, scaleX: 0 },
    visible: {
      opacity: 1,
      scaleX: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1] as Easing,
      },
    },
  };

  const decorVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.4,
        ease: [0.25, 0.1, 0.25, 1] as Easing,
      },
    },
  };

  return (
    <motion.div
      className={`relative py-6 sm:py-8 lg:py-10 overflow-hidden ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      <div className="flex items-center justify-center gap-3 sm:gap-4 lg:gap-6">
        {/* Left Line */}
        <motion.div
          className={`h-[1px] w-16 sm:w-24 lg:w-32 ${
            variant === "accent"
              ? "bg-gradient-to-r from-transparent via-accent/50 to-accent"
              : variant === "subtle"
                ? "bg-gradient-to-r from-transparent to-border"
                : "bg-gradient-to-r from-transparent via-border/50 to-accent/30"
          }`}
          variants={separatorVariants}
          style={{ originX: locale === "ar" ? 1 : 0 }}
        />

        {/* Center Decorative Element */}
        <motion.div
          className="relative flex items-center justify-center"
          variants={decorVariants}
        >
          {/* Diamond shape */}
          <div
            className={`w-2 sm:w-2.5 h-2 sm:h-2.5 rotate-45 ${
              variant === "accent"
                ? "bg-accent"
                : variant === "subtle"
                  ? "bg-border"
                  : "bg-accent/60"
            }`}
          />
          {/* Glow effect */}
          <motion.div
            className={`absolute w-4 h-4 rounded-full blur-sm ${
              variant === "accent"
                ? "bg-accent/30"
                : variant === "subtle"
                  ? "bg-border/20"
                  : "bg-accent/20"
            }`}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Right Line */}
        <motion.div
          className={`h-[1px] w-16 sm:w-24 lg:w-32 ${
            variant === "accent"
              ? "bg-gradient-to-l from-transparent via-accent/50 to-accent"
              : variant === "subtle"
                ? "bg-gradient-to-l from-transparent to-border"
                : "bg-gradient-to-l from-transparent via-border/50 to-accent/30"
          }`}
          variants={separatorVariants}
          style={{ originX: locale === "ar" ? 0 : 1 }}
        />
      </div>
    </motion.div>
  );
}
