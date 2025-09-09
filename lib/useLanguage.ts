"use client"

import { useState, useEffect } from 'react'
import { translations, type Language } from './translations'

// Fonction pour détecter la langue de l'utilisateur
function detectUserLanguage(): Language {
  if (typeof window === 'undefined') {
    return 'fr' // Français par défaut côté serveur
  }

  // 1. Vérifier d'abord le localStorage pour une préférence sauvegardée
  const savedLanguage = localStorage.getItem('preferred-language') as Language
  if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'fr')) {
    console.log('Using saved language:', savedLanguage)
    return savedLanguage
  }

  // 2. Détecter la langue du navigateur
  const browserLanguage = navigator.language || navigator.languages?.[0] || 'fr'
  console.log('Browser language detected:', browserLanguage)
  
  // 3. Extraire le code de langue principal (ex: 'fr' de 'fr-FR')
  const primaryLanguage = browserLanguage.split('-')[0].toLowerCase()
  
  // 4. Vérifier si c'est anglais
  const isEnglish = primaryLanguage === 'en' || 
                   browserLanguage.startsWith('en') || 
                   browserLanguage.includes('EN')
  
  const detectedLanguage = isEnglish ? 'en' : 'fr' // Français par défaut
  console.log('Final detected language:', detectedLanguage)
  
  return detectedLanguage
}

export function useLanguage() {
  const [language, setLanguage] = useState<Language>('fr') // Français par défaut
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Détecter et appliquer la langue
    const detectedLanguage = detectUserLanguage()
    setLanguage(detectedLanguage)
    setIsLoading(false)
  }, [])

  const changeLanguage = (newLanguage: Language) => {
    console.log('Changing language to:', newLanguage)
    setLanguage(newLanguage)
    
    if (typeof window !== 'undefined') {
      localStorage.setItem('preferred-language', newLanguage)
      console.log('Language saved to localStorage:', newLanguage)
    }
  }

  return {
    language,
    changeLanguage,
    isLoading,
    t: translations[language]
  }
}
