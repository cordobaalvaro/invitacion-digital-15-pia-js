"use client";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import Image from "next/image";
export function HeroSection() {
    const { ref, isVisible } = useScrollAnimation(0.2);
    return (<section ref={ref} className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-gradient-to-b from-muted to-background overflow-hidden">
      
      <div className="absolute inset-0 z-0 will-change-transform">
        <div className="relative w-full h-full">
          <Image src="/images/fondo.jpg" alt="Fondo" fill priority sizes="100vw" className="object-cover scale-110 blur-[8px] md:blur-[12px] opacity-90 transition-transform duration-700" style={{
            transform: isVisible ? 'scale(1.05)' : 'scale(1.1)'
        }}/>
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/10 to-background/30 dark:from-black/30 dark:via-black/20 dark:to-background/40"/>
      </div>
      <div className={`absolute top-10 left-10 opacity-20 w-32 h-32 transition-all duration-1000 z-10 ${isVisible ? "translate-x-0 opacity-20" : "-translate-x-20 opacity-0"}`}>
        <Image src="/images/floral-decoration.png" alt="" width={128} height={128} className="object-contain grayscale"/>
      </div>
      <div className={`absolute bottom-10 right-10 opacity-20 w-32 h-32 rotate-180 transition-all duration-1000 delay-200 z-10 ${isVisible ? "translate-x-0 opacity-20" : "translate-x-20 opacity-0"}`}>
        <Image src="/images/floral-decoration.png" alt="" width={128} height={128} className="object-contain grayscale"/>
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <h2 className={`font-serif text-[clamp(2.5rem,8vw,6.875rem)] text-primary mb-4 tracking-wide drop-shadow-lg transition-all duration-1000 ease-out ${isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-10"}`}>
          Mis 15 años
        </h2>
        <h1 className={`font-serif text-[clamp(4rem,12vw,8.75rem)] text-foreground font-bold leading-none mb-8 drop-shadow-2xl transition-all duration-1000 delay-200 ease-out ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`} style={{
            textShadow: isVisible ? '0 4px 24px rgba(0,0,0,0.08)' : 'none'
        }}>
          Pia
        </h1>

        {/* Decorative flower */}
        <div className={`flex justify-center transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className="text-primary animate-float">
            <circle cx="30" cy="30" r="4" fill="currentColor"/>
            <path d="M30 15C30 15 25 20 25 25C25 30 27.5 32.5 30 32.5C32.5 32.5 35 30 35 25C35 20 30 15 30 15Z" fill="currentColor"/>
            <path d="M30 45C30 45 25 40 25 35C25 30 27.5 27.5 30 27.5C32.5 27.5 35 30 35 35C35 40 30 45 30 45Z" fill="currentColor"/>
            <path d="M15 30C15 30 20 25 25 25C30 25 32.5 27.5 32.5 30C32.5 32.5 30 35 25 35C20 35 15 30 15 30Z" fill="currentColor"/>
            <path d="M45 30C45 30 40 25 35 25C30 25 27.5 27.5 27.5 30C27.5 32.5 30 35 35 35C40 35 45 30 45 30Z" fill="currentColor"/>
          </svg>
        </div>
      </div>
    </section>);
}
