"use client";

import { motion, Easing } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface SectionBadgeProps {
  text: string;
  icon?: LucideIcon;
  variant?: "default" | "gold" | "outline";
  className?: string;
}

export function SectionBadge({
  text,
  icon: Icon,
  variant = "default",
  className = "",
}: SectionBadgeProps) {
  const badgeVariants = {
    hidden: { opacity: 0, y: 10, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1] as Easing,
      },
    },
  };

  const getVariantStyles = () => {
    switch (variant) {
      case "gold":
        return "bg-accent/10 border-accent/20 text-accent";
      case "outline":
        return "bg-transparent border-border text-muted-foreground";
      default:
        return "bg-accent/5 border-accent/15 text-accent";
    }
  };

  return (
    <motion.div
      className={`inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border text-xs sm:text-sm font-medium tracking-wide ${getVariantStyles()} ${className}`}
      variants={badgeVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {Icon && (
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{
            duration: 0.5,
            delay: 0.3,
            ease: "easeInOut",
          }}
        >
          <Icon className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
        </motion.div>
      )}
      <span>{text}</span>
    </motion.div>
  );
}
