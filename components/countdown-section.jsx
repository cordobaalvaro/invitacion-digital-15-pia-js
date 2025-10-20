"use client";
import { useEffect, useState } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Heart } from "lucide-react";
export function CountdownSection() {
    const { ref, isVisible } = useScrollAnimation();
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });
    const [isEventDay, setIsEventDay] = useState(false);
    useEffect(() => {
        const targetDate = new Date("2025-11-15T22:00:00-03:00");
        const calculateTimeLeft = () => {
            const now = new Date();
            const difference = targetDate.getTime() - now.getTime();
            if (difference <= 0) {
                setIsEventDay(true);
                return;
            }
            setTimeLeft({
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            });
        };
        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);
        return () => clearInterval(timer);
    }, []);
    if (isEventDay) {
        return (<section ref={ref} className="relative overflow-hidden py-20 px-4 bg-gradient-to-b from-[#e3eaf2] to-[#f0f4f8] dark:from-[#0b172a] dark:to-[#0a1320]">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className={`font-serif text-5xl md:text-6xl text-[#1a1a1a] font-bold mb-8 transition-all duration-700 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}>
            ¡Llegó el gran día!
          </h2>
        </div>
      </section>);
    }
    return (<section ref={ref} className="relative overflow-hidden py-20 px-4 bg-gradient-to-b from-[#e3eaf2] to-[#f0f4f8] dark:from-[#0b172a] dark:to-[#0a1320]">
      <div className="relative z-10 max-w-2xl mx-auto">
        {/* Circular frame container */}
        <div className={`relative aspect-square max-w-md mx-auto transition-all duration-1000 ${isVisible ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-90 rotate-12"}`}>
          {/* Concentric circles */}
          <div className="absolute inset-0 rounded-full border-2 border-[#4A90E2]/30 dark:border-white/10"></div>
          <div className="absolute inset-2 rounded-full border-2 border-[#4A90E2]/20 dark:border-white/10"></div>
          <div className="absolute inset-4 rounded-full border border-[#4A90E2]/15 dark:border-white/5"></div>

          {/* Blue rose decoration - top left */}
          <div className={`absolute -top-8 -left-8 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0 translate-y-0" : "opacity-0 -translate-x-8 -translate-y-8"}`}>
            <svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-lg">
              {/* Rose petals */}
              <ellipse cx="70" cy="65" rx="18" ry="22" fill="#4A90E2" opacity="0.9"/>
              <ellipse cx="55" cy="70" rx="16" ry="20" fill="#5BA3F5" opacity="0.85"/>
              <ellipse cx="85" cy="70" rx="16" ry="20" fill="#5BA3F5" opacity="0.85"/>
              <ellipse cx="70" cy="80" rx="20" ry="18" fill="#6BB0FF" opacity="0.8"/>
              <ellipse cx="60" cy="75" rx="14" ry="16" fill="#7BBFFF" opacity="0.75"/>
              <ellipse cx="80" cy="75" rx="14" ry="16" fill="#7BBFFF" opacity="0.75"/>
              <circle cx="70" cy="72" r="8" fill="#0055A4" opacity="0.95"/>

              {/* Leaves */}
              <ellipse cx="45" cy="85" rx="12" ry="20" fill="#6B9DC9" opacity="0.6" transform="rotate(-25 45 85)"/>
              <ellipse cx="95" cy="85" rx="12" ry="20" fill="#6B9DC9" opacity="0.6" transform="rotate(25 95 85)"/>
              <ellipse cx="35" cy="75" rx="10" ry="18" fill="#7AADDB" opacity="0.5" transform="rotate(-35 35 75)"/>
              <ellipse cx="105" cy="75" rx="10" ry="18" fill="#7AADDB" opacity="0.5" transform="rotate(35 105 75)"/>
            </svg>
          </div>

          {/* Content inside circle */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
            {/* Title */}
            <h2 className={`font-serif text-4xl md:text-5xl text-primary mb-6 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}>
              Falta
            </h2>

            {/* Countdown numbers */}
            <div className={`flex items-center justify-center gap-3 mb-2 transition-all duration-700 delay-400 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}>
              <div className="text-center">
                <div className="font-serif text-4xl md:text-5xl text-primary font-bold leading-none">
                  {String(timeLeft.days).padStart(2, "0")}
                </div>
              </div>
              <div className="text-3xl text-primary/60 font-light">|</div>
              <div className="text-center">
                <div className="font-serif text-4xl md:text-5xl text-primary font-bold leading-none">
                  {String(timeLeft.hours).padStart(2, "0")}
                </div>
              </div>
              <div className="text-3xl text-primary/60 font-light">|</div>
              <div className="text-center">
                <div className="font-serif text-4xl md:text-5xl text-primary font-bold leading-none">
                  {String(timeLeft.minutes).padStart(2, "0")}
                </div>
              </div>
              <div className="text-3xl text-primary/60 font-light">|</div>
              <div className="text-center">
                <div className="font-serif text-4xl md:text-5xl text-primary font-bold leading-none">
                  {String(timeLeft.seconds).padStart(2, "0")}
                </div>
              </div>
            </div>

            {/* Labels */}
            <div className={`flex items-center justify-center gap-3 mb-6 transition-all duration-700 delay-500 ${isVisible ? "opacity-100" : "opacity-0"}`}>
              <div className="text-primary/70 text-xs uppercase tracking-wider w-12 text-center">DÍAS</div>
              <div className="w-3"></div>
              <div className="text-primary/70 text-xs uppercase tracking-wider w-12 text-center">HS</div>
              <div className="w-3"></div>
              <div className="text-primary/70 text-xs uppercase tracking-wider w-12 text-center">MIN</div>
              <div className="w-3"></div>
              <div className="text-primary/70 text-xs uppercase tracking-wider w-12 text-center">SEG</div>
            </div>

            {/* Heart icon */}
            <div className={`transition-all duration-700 delay-600 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}>
              <Heart className="w-6 h-6 fill-current text-primary"/>
            </div>
          </div>
        </div>
      </div>
    </section>);
}
