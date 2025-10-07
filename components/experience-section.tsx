"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { GridPattern } from "@/components/ui/grid-pattern"

interface ExperienceSectionProps {
  title: string
  items: string[]
}

export default function ExperienceSection({ title, items }: ExperienceSectionProps) {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#030822] px-4 py-16 sm:px-6 sm:py-20 md:px-12 lg:px-24">
      {/* Grid Pattern Background - Responsive */}
      <GridPattern
        width={40}
        height={40}
        x={-1}
        y={-1}
        strokeDasharray="4 2"
        className={cn(
          "fill-[#a3e635]/10 stroke-[#a3e635]/20",
          "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)] sm:[mask-image:radial-gradient(500px_circle_at_center,white,transparent)] md:[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
        )}
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-medium mb-12 sm:mb-16 tracking-wide text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {title}
        </motion.h2>

        <div className="space-y-6 sm:space-y-8 md:space-y-12">
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              viewport={{ once: true }}
            >
              <div className="relative bg-gradient-to-r from-[#a3e635]/10 to-transparent p-4 sm:p-6 md:p-8 rounded-lg border border-[#a3e635]/20 hover:border-[#a3e635]/40 transition-all duration-300 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-r from-[#a3e635]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                <p className="relative text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium tracking-wide text-white leading-relaxed">
                  {item}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

