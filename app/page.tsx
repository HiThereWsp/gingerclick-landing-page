"use client"

import { Button } from "@/components/ui/button"
import MouseMoveEffect from "@/components/mouse-move-effect"
import { motion } from "framer-motion"
import { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth"
  }, [])

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
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-lg overflow-hidden">
              <img src="/profile-new.jpeg" alt="Profile" className="w-full h-full object-cover" />
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
              <span className="text-[#a3e635]">GROWTH SYSTEMS</span> <span className="text-white font-medium">FOR</span>
              <br />
              <span className="text-white font-medium">ESTABLISHED B2B</span>
              <br />
              <span className="text-gray-300 font-light">COMPANIES</span>
            </h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <a href="https://calendly.com/andygtd/30min" target="_blank" rel="noopener noreferrer">
                <Button className="bg-[#a3e635] hover:bg-[#8fd400] text-black font-semibold px-10 py-7 rounded-full text-lg shadow-[0_0_30px_rgba(163,230,53,0.4)] hover:shadow-[0_0_40px_rgba(163,230,53,0.6)] transition-all duration-300">
                  {"Let's talk"}
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

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
            ANDY AND HIS TEAM <span className="text-black font-bold">SPECIALIZE</span> IN BUILDING AUTOMATION SYSTEMS
            THAT HAVE <span className="text-black font-bold">GENERATED MILLIONS</span> FOR ESTABLISHED B2B BUSINESSES.
          </motion.h3>
        </div>
      </motion.section>

      <motion.section
        className="px-6 py-12 md:px-12 lg:px-24 bg-[#fdf4cf]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center items-center gap-8 md:gap-16 flex-wrap">
            <div className="h-16 md:h-20">
              <img
                src="/bat-logo.png"
                alt="BAT"
                className="h-full w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
            <div className="h-16 md:h-20">
              <img
                src="/orange-logo.png"
                alt="Orange"
                className="h-full w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
            <div className="h-16 md:h-20">
              <img
                src="/airbnb-logo.jpeg"
                alt="Airbnb"
                className="h-full w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
            <div className="h-16 md:h-20">
              <img
                src="/castr-logo.svg"
                alt="Castr"
                className="h-full w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
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
          <h3 className="text-4xl md:text-5xl font-medium mb-16 tracking-wide text-[#030822]">Experience</h3>

          <div className="space-y-12">
            <motion.div
              className="text-2xl md:text-3xl font-medium tracking-wide text-[#030822]"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              $3M+ REVENUE GENERATED FOR KEY ACCOUNTS
            </motion.div>
            <motion.div
              className="text-2xl md:text-3xl font-medium tracking-wide text-[#030822]"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              $320K+ COSTS SAVED WITH AUTOMATED OPS SYSTEMS
            </motion.div>
            <motion.div
              className="text-2xl md:text-3xl font-medium tracking-wide text-[#030822]"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              952+ HOURS FREED WITH CUSTOMER EXPERIENCE SYSTEMS
            </motion.div>
            <motion.div
              className="text-2xl md:text-3xl font-medium tracking-wide text-[#030822]"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              + 60 HIGH-TICKET SALES CALLS BOOKED W/ AUTOMATED PIPELINE
            </motion.div>
          </div>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Lead Generation */}
            <div className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] p-8 rounded-2xl border border-[#a3e635]/10 hover:border-[#a3e635]/30 transition-all duration-300 group">
              <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-[#a3e635] group-hover:drop-shadow-[0_0_10px_rgba(163,230,53,0.3)] transition-all">
                Lead Generation
              </h3>
              <div className="space-y-3">
                <div className="bg-[#030822]/50 px-4 py-3 rounded-lg border border-white/5 hover:border-[#a3e635]/20 transition-colors">
                  <span className="text-sm font-medium">AI Cold Email Systems</span>
                </div>
                <div className="bg-[#030822]/50 px-4 py-3 rounded-lg border border-white/5 hover:border-[#a3e635]/20 transition-colors">
                  <span className="text-sm font-medium">Application Systems</span>
                </div>
                <div className="bg-[#030822]/50 px-4 py-3 rounded-lg border border-white/5 hover:border-[#a3e635]/20 transition-colors">
                  <span className="text-sm font-medium">Content Systems</span>
                </div>
              </div>
            </div>

            {/* Project Management */}
            <div className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] p-8 rounded-2xl border border-[#a3e635]/10 hover:border-[#a3e635]/30 transition-all duration-300 group">
              <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-[#a3e635] group-hover:drop-shadow-[0_0_10px_rgba(163,230,53,0.3)] transition-all">
                Project Management
              </h3>
              <div className="space-y-3">
                <div className="bg-[#030822]/50 px-4 py-3 rounded-lg border border-white/5 hover:border-[#a3e635]/20 transition-colors">
                  <span className="text-sm font-medium">AI Automated Fulfillment</span>
                </div>
                <div className="bg-[#030822]/50 px-4 py-3 rounded-lg border border-white/5 hover:border-[#a3e635]/20 transition-colors">
                  <span className="text-sm font-medium">AI Onboarding Systems</span>
                </div>
                <div className="bg-[#030822]/50 px-4 py-3 rounded-lg border border-white/5 hover:border-[#a3e635]/20 transition-colors">
                  <span className="text-sm font-medium">PM Systems</span>
                </div>
              </div>
            </div>

            {/* Hiring Systems */}
            <div className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] p-8 rounded-2xl border border-[#a3e635]/10 hover:border-[#a3e635]/30 transition-all duration-300 group">
              <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-[#a3e635] group-hover:drop-shadow-[0_0_10px_rgba(163,230,53,0.3)] transition-all">
                Hiring Systems
              </h3>
              <div className="space-y-3">
                <div className="bg-[#030822]/50 px-4 py-3 rounded-lg border border-white/5 hover:border-[#a3e635]/20 transition-colors">
                  <span className="text-sm font-medium">Intake Systems</span>
                </div>
                <div className="bg-[#030822]/50 px-4 py-3 rounded-lg border border-white/5 hover:border-[#a3e635]/20 transition-colors">
                  <span className="text-sm font-medium">AI Scoring Systems</span>
                </div>
                <div className="bg-[#030822]/50 px-4 py-3 rounded-lg border border-white/5 hover:border-[#a3e635]/20 transition-colors">
                  <span className="text-sm font-medium">Trial Systems</span>
                </div>
              </div>
            </div>

            {/* Sales Administration */}
            <div className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] p-8 rounded-2xl border border-[#a3e635]/10 hover:border-[#a3e635]/30 transition-all duration-300 group">
              <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-[#a3e635] group-hover:drop-shadow-[0_0_10px_rgba(163,230,53,0.3)] transition-all">
                Sales Administration
              </h3>
              <div className="space-y-3">
                <div className="bg-[#030822]/50 px-4 py-3 rounded-lg border border-white/5 hover:border-[#a3e635]/20 transition-colors">
                  <span className="text-sm font-medium">Customized CRMs</span>
                </div>
                <div className="bg-[#030822]/50 px-4 py-3 rounded-lg border border-white/5 hover:border-[#a3e635]/20 transition-colors">
                  <span className="text-sm font-medium">AI Asset Generators</span>
                </div>
                <div className="bg-[#030822]/50 px-4 py-3 rounded-lg border border-white/5 hover:border-[#a3e635]/20 transition-colors">
                  <span className="text-sm font-medium">AI Nurture Systems</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="px-6 py-12 md:px-12 lg:px-24"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#2a2a2a] rounded-3xl p-12 text-center max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-light mb-4">{"Let's Talk"}</h3>
            <p className="text-gray-400 mb-8 text-lg">Free Audit • Custom Automation • Guaranteed Value</p>

            <a href="https://calendly.com/andygtd/30min" target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#a3e635] hover:bg-[#8fd400] text-black font-semibold px-8 py-6 rounded-full text-lg">
                {"Let's Talk"}
              </Button>
            </a>
          </div>
        </div>
      </motion.section>

      {/* Footer - Updated */}
      <footer className="px-6 py-12 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-500 mb-6">© 2025 GingerClick — Transforming B2B Growth through premium automated systems</p>

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
