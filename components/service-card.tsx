"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowLeft } from "lucide-react"
import { useLocale } from "@/hooks/use-locale-context"
import type { LucideIcon } from "lucide-react"
import Link from "next/link"

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  href?: string
}

export function ServiceCard({ icon: Icon, title, description, href = "#" }: ServiceCardProps) {
  const { locale } = useLocale()
  const ArrowIcon = locale === "ar" ? ArrowLeft : ArrowRight

  return (
    <Card className="group shadow-none transition-all duration-300 hover:-translate-y-1 border-border hover:border-accent/50">
      <CardHeader className="text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300">
          <Icon className="h-8 w-8 text-accent" />
        </div>
        <CardTitle className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <CardDescription className="text-muted-foreground mb-6 leading-relaxed">{description}</CardDescription>
        <Link href={href}>
        <Button variant="ghost" className="group/btn text-accent hover:text-white hover:bg-accent">
          {locale === "ar" ? "اعرف المزيد" : "Learn More"}
          <ArrowIcon className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 rtl:group-hover/btn:-translate-x-1 transition-transform duration-200" />
        </Button>
          </Link>
        
      </CardContent>
    </Card>
  )
}
