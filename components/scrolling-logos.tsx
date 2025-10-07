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
    <div className="relative overflow-hidden bg-black py-3">
      {/* Gradient overlays pour un effet de fondu */}
      <div className="absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-black to-transparent"></div>
      <div className="absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-black to-transparent"></div>
      
      {/* Container pour l'animation */}
      <div className="flex animate-scroll">
        {/* Première série de logos */}
        {logos.map((logo, index) => (
          <div
            key={`first-${index}`}
            className="mx-12 flex-shrink-0 flex items-center justify-center"
          >
            <div className="relative">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="object-contain"
              />
            </div>
          </div>
        ))}
        
        {/* Deuxième série de logos (pour l'effet de boucle) */}
        {logos.map((logo, index) => (
          <div
            key={`second-${index}`}
            className="mx-12 flex-shrink-0 flex items-center justify-center"
          >
            <div className="relative">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}