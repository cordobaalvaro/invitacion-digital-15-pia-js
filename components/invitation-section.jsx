"use client";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
export function InvitationSection() {
    const { ref, isVisible } = useScrollAnimation();
    return (<>
      <section ref={ref} className="py-20 px-4 bg-background relative overflow-hidden">
        <div className="max-w-3xl mx-auto">
          
          <div className={`flex items-center justify-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <div className="h-px bg-primary flex-1 max-w-[200px]"></div>
            <span className="text-primary text-4xl mx-6">❀</span>
            <div className="h-px bg-primary flex-1 max-w-[200px]"></div>
          </div>

          <div className={`text-center space-y-6 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <p className="text-foreground text-lg md:text-2xl leading-relaxed px-4 font-light tracking-wide">
              ¡Estoy feliz de compartir con vos este momento tan especial! Quiero invitarte a celebrar mis{" "}
              <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-primary/90 to-primary text-primary-foreground font-semibold rounded-full shadow-lg shadow-primary/20 transition-transform hover:scale-105">
                15 años
              </span>
              .
            </p>
          </div>

          {/* Floral divider */}
          <div className={`flex items-center justify-center mt-12 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <div className="h-px bg-primary flex-1 max-w-[200px]"></div>
            <span className="text-primary text-4xl mx-6">❀</span>
            <div className="h-px bg-primary flex-1 max-w-[200px]"></div>
          </div>
        </div>
      </section>
    </>);
}
