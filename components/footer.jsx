"use client";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import Image from "next/image";
export function Footer() {
    const { ref, isVisible } = useScrollAnimation();
    return (<footer ref={ref} className={`py-20 px-4 bg-gradient-to-b from-primary via-primary/90 to-secondary text-primary-foreground relative overflow-hidden transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#ffffff33,_transparent_65%)] opacity-80" aria-hidden="true"/>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_#0a16284d,_transparent_60%)] opacity-80" aria-hidden="true"/>
      <div className="absolute top-8 left-8 opacity-10 w-32 h-32">
        <Image src="/images/floral-decoration.png" alt="" width={128} height={128} className="object-contain"/>
      </div>
      <div className="absolute bottom-8 right-8 opacity-10 w-32 h-32 rotate-180">
        <Image src="/images/floral-decoration.png" alt="" width={128} height={128} className="object-contain"/>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-primary-foreground/20" aria-hidden="true"/>
      <div className="absolute inset-x-12 top-12 h-px bg-primary-foreground/20" aria-hidden="true"/>

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <p className="text-white uppercase tracking-[0.35em] text-xs md:text-sm mb-6">
          Gracias por ser parte
        </p>
        <div className="flex items-center justify-center mb-10">
          <div className="h-px bg-white/40 flex-1 max-w-[160px]"></div>
          <span className="mx-6 text-4xl text-white/60">❀</span>
          <div className="h-px bg-white/40 flex-1 max-w-[160px]"></div>
        </div>

        <h3 className="font-serif text-3xl md:text-4xl text-white mb-4">
          ¡Te espero!
        </h3>
        <p className="text-white/90 text-lg md:text-xl mb-8">
          Con amor, Pia 💖
        </p>

        <div className="mx-auto max-w-md rounded-3xl border border-white/20 bg-white/10 px-6 py-5 backdrop-blur-sm">
          <p className="text-sm md:text-base text-white/90">
            Prepárate para una noche llena de música, risas y recuerdos
            inolvidables. ¡Será un honor compartirla con vos!
          </p>
        </div>
      </div>
    </footer>);
}
