"use client";
import { Check } from "lucide-react";
export function RsvpSection({ onOpenModal }) {
    return (<section className="py-20 px-4 bg-background relative overflow-hidden">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-foreground font-bold mb-8 animate-scale-in">
          No te pierdas esta noche especial
        </h2>

        <button onClick={onOpenModal} className="group relative inline-flex items-center gap-3 px-12 py-5 bg-primary text-white text-xl font-semibold rounded-[50px] shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/30 hover:scale-105 animate-slide-up animate-delay-200 animate-pulse-glow overflow-hidden">
          
          <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"/>
          <Check className="w-6 h-6 text-white relative z-10 transition-transform group-hover:scale-110"/>
          <span className="relative z-10">Confirmar asistencia</span>
        </button>
      </div>
    </section>);
}
