"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
export function IntroScreen({ onComplete }) {
    const [isVisible, setIsVisible] = useState(true);
    const enterWithMusic = () => {
        try {
            localStorage.setItem("music_pref", "on");
        }
        catch (_a) { }
        if (typeof window !== "undefined") {
            window.dispatchEvent(new CustomEvent("play-music"));
        }
        setIsVisible(false);
        setTimeout(onComplete, 600);
    };
    const enterWithoutMusic = () => {
        try {
            localStorage.setItem("music_pref", "off");
        }
        catch (_a) { }
        if (typeof window !== "undefined") {
            window.dispatchEvent(new CustomEvent("pause-music"));
        }
        setIsVisible(false);
        setTimeout(onComplete, 600);
    };
    return (<div className={`fixed inset-0 z-50 flex items-center justify-center bg-background transition-opacity duration-600 ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
  <div className="flex flex-col items-center gap-8 px-4">
        {/* Animated Heart */}
        <div className="relative">
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-heart-beat">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#4a90e2" className="drop-shadow-lg"/>
          </svg>
        </div>

        {/* Welcome Text */}
        <div className="text-center space-y-2 animate-fade-in-up">
          <p className="text-lg md:text-xl text-muted-foreground font-sans tracking-wide">Bienvenido a la</p>
          <h1 className="text-2xl md:text-3xl font-serif font-bold text-foreground">Carta de Invitación de Pia</h1>
        </div>

        {/* Choice Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-in-up delay-150">
          <Button onClick={enterWithMusic} className="group relative rounded-full px-6 py-6 text-base sm:text-sm bg-primary text-white hover:bg-primary/90 shadow-lg hover:shadow-xl hover:shadow-primary/30 hover:scale-105 transition-all duration-300 overflow-hidden">
            <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"/>
            <span className="relative z-10">Entrar con música</span>
          </Button>
          <Button onClick={enterWithoutMusic} variant="outline" className="rounded-full px-6 py-6 text-base sm:text-sm hover:bg-muted/50 hover:scale-105 transition-all duration-300 hover:shadow-md backdrop-blur-sm">
            Entrar sin música
          </Button>
        </div>
      </div>
    </div>);
}
