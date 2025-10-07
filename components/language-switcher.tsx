"use client"

import { useLanguage } from '@/lib/useLanguage'
import { Button } from '@/components/ui/button'
import { usePathname } from 'next/navigation'

export function LanguageSwitcher() {
  const { changeLanguage, isLoading } = useLanguage()
  const pathname = usePathname()
  
  // Déterminer la langue actuelle basée sur la route
  const currentLanguage = pathname === '/en' ? 'en' : 'fr'

  const handleLanguageChange = (newLanguage: 'en' | 'fr') => {
    console.log('Button clicked, changing to:', newLanguage)
    
    // Rediriger vers la route appropriée
    if (newLanguage === 'en') {
      window.location.href = '/en'
    } else {
      window.location.href = '/'
    }
  }

  // Ne pas afficher pendant le chargement pour éviter les problèmes d'hydratation
  if (isLoading) {
    return (
      <div className="flex gap-1.5 sm:gap-2 justify-center">
        <div className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold border border-white/40 text-white/80 rounded-lg bg-white/5">
          EN
        </div>
        <div className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold border border-white/40 text-white/80 rounded-lg bg-white/5">
          FR
        </div>
      </div>
    )
  }

  console.log('Current language:', currentLanguage) // Debug log

  return (
    <div className="flex gap-1.5 sm:gap-2 justify-center">
      <Button
        variant="outline"
        size="sm"
        onClick={() => handleLanguageChange('en')}
        className={`px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold transition-all duration-200 rounded-lg ${
          currentLanguage === 'en' 
            ? 'bg-[#a3e635] text-black border-[#a3e635] shadow-lg shadow-[#a3e635]/30' 
            : 'border-white/40 text-white/80 hover:bg-white/15 hover:text-white hover:border-white/60 bg-white/5'
        }`}
      >
        EN
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => handleLanguageChange('fr')}
        className={`px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold transition-all duration-200 rounded-lg ${
          currentLanguage === 'fr' 
            ? 'bg-[#a3e635] text-black border-[#a3e635] shadow-lg shadow-[#a3e635]/30' 
            : 'border-white/40 text-white/80 hover:bg-white/15 hover:text-white hover:border-white/60 bg-white/5'
        }`}
      >
        FR
      </Button>
    </div>
  )
}
