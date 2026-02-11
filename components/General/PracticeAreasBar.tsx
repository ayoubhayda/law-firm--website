import React from "react";
import { motion } from "framer-motion";
import { useLocale } from "@/hooks/use-locale-context";
import { Users, Home, Briefcase, Shield, FileText, Gavel } from "lucide-react";

const PracticeAreasBar = () => {
  const { locale } = useLocale();
  const isRtl = locale === "ar";

  const practiceAreas = [
    {
      icon: Users,
      labelAr: "قانون الأسرة",
      labelEn: "Family Law",
    },
    {
      icon: Home,
      labelAr: "العقارات",
      labelEn: "Real Estate",
    },
    {
      icon: Briefcase,
      labelAr: "القانون التجاري",
      labelEn: "Business Law",
    },
    {
      icon: Shield,
      labelAr: "الدفاع الجنائي",
      labelEn: "Criminal Defense",
    },
    {
      icon: FileText,
      labelAr: "صياغة العقود",
      labelEn: "Contract Drafting",
    },
    {
      icon: Gavel,
      labelAr: "التقاضي والتحكيم",
      labelEn: "Litigation & Arbitration",
    },
  ];

  const PracticeItem = ({
    area,
    index,
    animated = false,
  }: {
    area: (typeof practiceAreas)[0];
    index: number;
    animated?: boolean;
  }) => {
    const content = (
      <div className="flex items-center gap-2 lg:gap-3 shrink-0 group cursor-pointer">
        <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-lg border border-border flex items-center justify-center bg-background group-hover:border-accent group-hover:bg-accent/10 transition-all duration-300">
          <area.icon className="w-4 h-4 lg:w-5 lg:h-5 text-muted-foreground group-hover:text-accent transition-colors" />
        </div>
        <span className="text-xs lg:text-sm font-medium text-foreground/80 whitespace-nowrap group-hover:text-accent transition-colors">
          {isRtl ? area.labelAr : area.labelEn}
        </span>
      </div>
    );

    if (animated) {
      return content;
    }

    return (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
      >
        {content}
      </motion.div>
    );
  };

  return (
    <motion.div
      className="relative z-20 border-t border-border bg-card/50 backdrop-blur-sm"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.9 }}
    >
      {/* Desktop: static layout */}
      <div className="hidden lg:block mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-5">
          {practiceAreas.map((area, index) => (
            <PracticeItem key={index} area={area} index={index} />
          ))}
        </div>
      </div>

      {/* Mobile/Tablet: infinite marquee */}
      <div className="lg:hidden overflow-hidden relative">
        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-card/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-card/80 to-transparent z-10 pointer-events-none" />

        <div className="practice-marquee-container py-4">
          <div
            className={`practice-marquee-track ${isRtl ? "rtl-marquee" : ""}`}
          >
            {/* First set */}
            {practiceAreas.map((area, index) => (
              <div key={`a-${index}`} className="practice-marquee-item">
                <PracticeItem area={area} index={index} animated />
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {practiceAreas.map((area, index) => (
              <div key={`b-${index}`} className="practice-marquee-item">
                <PracticeItem area={area} index={index} animated />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .practice-marquee-container {
          width: 100%;
          overflow: hidden;
        }

        .practice-marquee-track {
          display: flex;
          width: max-content;
          animation: practice-scroll 20s linear infinite;
        }

        .practice-marquee-track:hover {
          animation-play-state: paused;
        }

        .practice-marquee-track.rtl-marquee {
          animation-name: practice-scroll-rtl;
        }

        .practice-marquee-item {
          flex-shrink: 0;
          padding: 0 1.25rem;
        }

        @keyframes practice-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes practice-scroll-rtl {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(50%);
          }
        }
      `}</style>
    </motion.div>
  );
};

export default PracticeAreasBar;
