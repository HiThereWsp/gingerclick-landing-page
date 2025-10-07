'use client'

import React from 'react'
import Image from 'next/image'

interface Logo {
  name: string
  src: string
  alt: string
  width?: number
  height?: number
}

const logos: Logo[] = [
  {
    name: 'Airbnb',
    src: '/airbnb-logo.png',
    alt: 'Airbnb',
    width: 180,
    height: 50
  },
  {
    name: 'Orange',
    src: '/orange-logo.png', 
    alt: 'Orange',
    width: 160,
    height: 50
  },
  {
    name: 'BAT',
    src: '/bat-logo.png',
    alt: 'BAT',
    width: 140,
    height: 50
  },
  {
    name: 'Sovereign Brands',
    src: '/sovereign brands-logo.png',
    alt: 'Sovereign Brands',
    width: 220,
    height: 50
  },
  {
    name: 'Vuse',
    src: '/vuse-logo.png',
    alt: 'Vuse',
    width: 160,
    height: 50
  }
]

export default function ScrollingLogos() {
  return (
    <div className="relative overflow-hidden bg-[#030822] py-6 sm:py-8">
      {/* Gradient overlays pour un effet de fondu - Responsive */}
      <div className="absolute left-0 top-0 z-10 h-full w-16 sm:w-24 md:w-32 bg-gradient-to-r from-[#030822] to-transparent"></div>
      <div className="absolute right-0 top-0 z-10 h-full w-16 sm:w-24 md:w-32 bg-gradient-to-l from-[#030822] to-transparent"></div>
      
      {/* Container pour l'animation en boucle infinie */}
      <div className="flex w-fit animate-infinite-scroll">
        {/* Première série de logos */}
        {logos.map((logo, index) => (
          <div
            key={`first-${index}`}
            className="flex-shrink-0 flex items-center justify-center mx-12 sm:mx-16 md:mx-24"
            style={{ minWidth: '200px' }}
          >
            <div className="relative scale-75 sm:scale-90 md:scale-100">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </div>
        ))}
        
        {/* Deuxième série de logos (pour la boucle) */}
        {logos.map((logo, index) => (
          <div
            key={`second-${index}`}
            className="flex-shrink-0 flex items-center justify-center mx-12 sm:mx-16 md:mx-24"
            style={{ minWidth: '200px' }}
          >
            <div className="relative scale-75 sm:scale-90 md:scale-100">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}