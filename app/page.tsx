"use client"

import { Button } from "@/components/ui/button"
import MouseMoveEffect from "@/components/mouse-move-effect"
import { LanguageSwitcher } from "@/components/language-switcher"
import CalendarEmbed from "@/components/calendar-embed"
import { ClientOnly } from "@/components/client-only"
import { MarqueeDemo } from "@/components/marquee-demo"
import { useLanguage } from "@/lib/useLanguage"
import { motion } from "framer-motion"
import { useEffect } from "react"

export default function Home() {
  const { t, isLoading } = useLanguage()

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth"
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#030822] flex items-center justify-center">
        <div className="text-white">Chargement...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#030822] text-white">
      {/* Hero Section */}
      <section className="relative px-6 py-16 md:px-12 lg:px-24 min-h-screen flex flex-col justify-center overflow-hidden">
        <MouseMoveEffect />

        <motion.div
          className="max-w-7xl mx-auto w-full relative z-40"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <div className="flex justify-between items-start mb-20">
            <div className="h-20 md:h-32 lg:h-36">
              <img src="/gingerclick-logo-new.png" alt="GingerClick" className="h-full w-auto object-contain" />
            </div>
            <div className="flex flex-col items-end gap-3">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-lg overflow-hidden">
                <img src="/profile-new andy guitteaud.png" alt="Andy Guitteaud - Expert en Growth Systems" className="w-full h-full object-cover" />
              </div>
              <ClientOnly fallback={
                <div className="flex gap-2 justify-center">
                  <div className="px-4 py-2 text-sm font-semibold border border-white/40 text-white/80 rounded-lg bg-white/5">
                    EN
                  </div>
                  <div className="px-4 py-2 text-sm font-semibold border border-white/40 text-white/80 rounded-lg bg-white/5">
                    FR
                  </div>
                </div>
              }>
                <LanguageSwitcher />
              </ClientOnly>
            </div>
          </div>

          {/* Main Headline */}
          <motion.div
            className="max-w-4xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold leading-tight mb-12 tracking-tight">
              <span className="text-[#a3e635]">{t.hero.title.growth}</span> <span className="text-white font-medium">{t.hero.title.for}</span>
              <br />
              <span className="text-white font-medium">{t.hero.title.established}</span>
              <br />
              <span className="text-gray-300 font-light">{t.hero.title.companies}</span>
            </h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <a href="#calendar">
                <Button className="bg-[#a3e635] hover:bg-[#8fd400] text-black font-semibold px-10 py-7 rounded-full text-lg shadow-[0_0_30px_rgba(163,230,53,0.4)] hover:shadow-[0_0_40px_rgba(163,230,53,0.6)] transition-all duration-300">
                  {t.hero.cta}
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Logos Section */}
      <motion.section
        className="px-6 py-12 md:px-12 lg:px-24 bg-[#fdf4cf]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <MarqueeDemo />
        </div>
      </motion.section>

      {/* About Andy Section */}
      <motion.section
        className="px-6 py-20 md:px-12 lg:px-24 min-h-screen flex flex-col justify-center bg-[#fdf4cf]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h3
            className="text-3xl md:text-4xl font-medium leading-relaxed text-center max-w-5xl mx-auto tracking-wide text-[#030822]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t.about.title}
          </motion.h3>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        className="px-6 py-20 md:px-12 lg:px-24 min-h-screen flex flex-col justify-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <motion.h2
            className="text-4xl md:text-5xl font-medium mb-16 tracking-wide text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t.services.title}
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Lead Generation */}
            <div className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] p-8 rounded-2xl border border-[#a3e635]/10 hover:border-[#a3e635]/30 transition-all duration-300 group shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-black/30">
              <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-[#a3e635] group-hover:drop-shadow-[0_0_10px_rgba(163,230,53,0.3)] transition-all">
                {t.services.leadGeneration.title}
              </h3>
              <div className="space-y-3">
                {t.services.leadGeneration.items.map((item, index) => (
                  <div key={index} className="bg-[#030822]/50 px-4 py-3 rounded-lg border border-white/5 hover:border-[#a3e635]/20 transition-colors">
                    <span className="text-sm font-medium text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Project Management */}
            <div className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] p-8 rounded-2xl border border-[#a3e635]/10 hover:border-[#a3e635]/30 transition-all duration-300 group shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-black/30">
              <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-[#a3e635] group-hover:drop-shadow-[0_0_10px_rgba(163,230,53,0.3)] transition-all">
                {t.services.projectManagement.title}
              </h3>
              <div className="space-y-3">
                {t.services.projectManagement.items.map((item, index) => (
                  <div key={index} className="bg-[#030822]/50 px-4 py-3 rounded-lg border border-white/5 hover:border-[#a3e635]/20 transition-colors">
                    <span className="text-sm font-medium text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hiring Systems */}
            <div className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] p-8 rounded-2xl border border-[#a3e635]/10 hover:border-[#a3e635]/30 transition-all duration-300 group shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-black/30">
              <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-[#a3e635] group-hover:drop-shadow-[0_0_10px_rgba(163,230,53,0.3)] transition-all">
                {t.services.hiringSystems.title}
              </h3>
              <div className="space-y-3">
                {t.services.hiringSystems.items.map((item, index) => (
                  <div key={index} className="bg-[#030822]/50 px-4 py-3 rounded-lg border border-white/5 hover:border-[#a3e635]/20 transition-colors">
                    <span className="text-sm font-medium text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sales Administration */}
            <div className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] p-8 rounded-2xl border border-[#a3e635]/10 hover:border-[#a3e635]/30 transition-all duration-300 group shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-black/30">
              <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-[#a3e635] group-hover:drop-shadow-[0_0_10px_rgba(163,230,53,0.3)] transition-all">
                {t.services.salesAdministration.title}
              </h3>
              <div className="space-y-3">
                {t.services.salesAdministration.items.map((item, index) => (
                  <div key={index} className="bg-[#030822]/50 px-4 py-3 rounded-lg border border-white/5 hover:border-[#a3e635]/20 transition-colors">
                    <span className="text-sm font-medium text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        className="px-6 py-20 md:px-12 lg:px-24 min-h-screen flex flex-col justify-center bg-[#fdf4cf]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl md:text-5xl font-medium mb-16 tracking-wide text-[#030822]">{t.experience.title}</h3>

          <div className="space-y-12">
            {t.experience.items.map((item, index) => (
              <motion.div
                key={index}
                className="text-2xl md:text-3xl font-medium tracking-wide text-[#030822]"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                viewport={{ once: true }}
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Calendar Section */}
      <motion.section
        id="calendar"
        className="px-6 py-12 md:px-12 lg:px-24"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#2a2a2a] rounded-3xl p-12 text-center max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-light mb-4">{t.cta.title}</h3>
            <p className="text-gray-400 mb-8 text-lg">{t.cta.subtitle}</p>
            
            <CalendarEmbed />
          </div>
        </div>
      </motion.section>

      {/* Footer - Updated */}
      <footer className="px-6 py-12 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-500 mb-6">{t.footer.copyright}</p>

          <div className="flex justify-center items-center gap-8">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: "smooth" })
              }}
              className="opacity-60 hover:opacity-100 transition-opacity"
            >
              <div className="h-20 md:h-32 lg:h-36">
                <img
                  src="/gingerclick-logo-new.png"
                  alt="GingerClick"
                  className="h-full w-auto object-contain"
                />
              </div>
            </a>
            <a 
              href="https://www.linkedin.com/in/andy-guitteaud-a3357984/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="opacity-60 hover:opacity-100 transition-opacity"
            >
              <div className="h-20 md:h-32 lg:h-36">
                <img
                  src="/linkedin-logo-new.png"
                  alt="LinkedIn"
                  className="h-full w-auto object-contain"
                />
              </div>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
