import { Marquee } from "@/components/ui/marquee"
import Image from "next/image"

const Logos = {
  airbnb: () => (
    <div className="relative h-[40px] w-[120px] flex items-center justify-center">
      <Image
        src="/airbnb-logo.png"
        alt="Airbnb"
        width={120}
        height={40}
        className="h-full w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
      />
    </div>
  ),
  bat: () => (
    <div className="relative h-[40px] w-[120px] flex items-center justify-center">
      <Image
        src="/bat-logo.png"
        alt="BAT"
        width={120}
        height={40}
        className="h-full w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
      />
    </div>
  ),
  orange: () => (
    <div className="relative h-[40px] w-[120px] flex items-center justify-center">
      <Image
        src="/orange-logo.png"
        alt="Orange"
        width={120}
        height={40}
        className="h-full w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
      />
    </div>
  ),
  vuse: () => (
    <div className="relative h-[40px] w-[120px] flex items-center justify-center">
      <Image
        src="/vuse-logo.png"
        alt="V'use"
        width={120}
        height={40}
        className="h-full w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
      />
    </div>
  ),
  everest: () => (
    <div className="relative h-[40px] w-[120px] flex items-center justify-center">
      <div className="text-white font-bold text-lg">EVEREST</div>
    </div>
  ),
  jumbo: () => (
    <div className="relative h-[40px] w-[120px] flex items-center justify-center">
      <div className="text-white font-bold text-lg">JUMBO</div>
    </div>
  ),
  villon: () => (
    <div className="relative h-[40px] w-[120px] flex items-center justify-center">
      <div className="text-white font-bold text-lg">VILLON</div>
    </div>
  ),
}

export function MarqueeDemo() {
  const arr = [Logos.airbnb, Logos.bat, Logos.orange, Logos.vuse, Logos.everest, Logos.jumbo, Logos.villon]

  return (
    <Marquee speed={40} pauseOnHover>
      {arr.map((Logo, index) => (
        <div
          key={index}
          className="relative h-full w-fit mx-[4rem] flex items-center justify-start"
        >
          <Logo />
        </div>
      ))}
    </Marquee>
  )
}
