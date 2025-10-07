"use client"

import { motion } from "framer-motion"

export default function LoadingScreen() {
  return (
    <div className="min-h-screen bg-[#030822] flex items-center justify-center">
      <motion.div
        className="relative"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Logo avec effet néon */}
        <motion.img
          src="/gingerclick-logo-new.png"
          alt="GingerClick"
          className="h-32 md:h-40 lg:h-48 w-auto object-contain"
          style={{
            filter: "drop-shadow(0 0 20px rgba(163, 230, 53, 0.6)) drop-shadow(0 0 40px rgba(163, 230, 53, 0.4))",
          }}
          animate={{
            filter: [
              "drop-shadow(0 0 20px rgba(163, 230, 53, 0.6)) drop-shadow(0 0 40px rgba(163, 230, 53, 0.4))",
              "drop-shadow(0 0 30px rgba(163, 230, 53, 0.8)) drop-shadow(0 0 60px rgba(163, 230, 53, 0.6))",
              "drop-shadow(0 0 20px rgba(163, 230, 53, 0.6)) drop-shadow(0 0 40px rgba(163, 230, 53, 0.4))",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Points de chargement animés */}
        <div className="flex justify-center mt-8 gap-2">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-3 h-3 bg-[#a3e635] rounded-full"
              animate={{
                y: [0, -10, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: index * 0.2,
                ease: "easeInOut",
              }}
              style={{
                boxShadow: "0 0 10px rgba(163, 230, 53, 0.8)",
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  )
}

