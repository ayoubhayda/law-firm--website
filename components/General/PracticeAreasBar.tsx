import React from "react";
import { motion } from "framer-motion";
import { useLocale } from "@/hooks/use-locale-context";
import { Scale, Gavel, FileText, Shield, Building, Users } from "lucide-react";

const PracticeAreasBar = () => {
  const { locale } = useLocale();
  const practiceAreas = [
    {
      icon: Scale,
      labelAr: "الاستشارات القانونية",
      labelEn: "Legal Consultations",
    },
    {
      icon: Gavel,
      labelAr: "الترافع في المحاكم",
      labelEn: "Court Representation",
    },
    {
      icon: FileText,
      labelAr: "الترجمة القانونية",
      labelEn: "Legal Translation",
    },
    {
      icon: Shield,
      labelAr: "الملكية الفكرية",
      labelEn: "Intellectual Property",
    },
    {
      icon: Building,
      labelAr: "الشركات التجارية",
      labelEn: "Corporate Business",
    },
    {
      icon: Users,
      labelAr: "الأحوال الشخصية",
      labelEn: "Family Law",
    },
  ];
  return (
    <motion.div
      className="relative z-20 border-t border-border bg-card/50 backdrop-blur-sm"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.9 }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4 lg:py-5 overflow-x-auto scrollbar-hide gap-6 lg:gap-0">
          {practiceAreas.map((area, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-2 lg:gap-3 shrink-0 group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
            >
              <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-lg border border-border flex items-center justify-center bg-background group-hover:border-accent group-hover:bg-accent/10 transition-all duration-300">
                <area.icon className="w-4 h-4 lg:w-5 lg:h-5 text-muted-foreground group-hover:text-accent transition-colors" />
              </div>
              <span className="text-xs lg:text-sm font-medium text-foreground/80 whitespace-nowrap group-hover:text-accent transition-colors">
                {locale === "ar" ? area.labelAr : area.labelEn}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default PracticeAreasBar;
