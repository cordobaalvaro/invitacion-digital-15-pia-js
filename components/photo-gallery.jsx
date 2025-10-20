"use client";
import { useEffect, useState } from "react";
import { Camera } from "lucide-react";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
const photos = [
    { id: 1, src: "/pia11.JPG", alt: "Pia foto 1" },
    { id: 2, src: "/pia22.JPG", alt: "Pia foto 2" },
    { id: 3, src: "/pia1.png", alt: "Pia foto 3" },
    { id: 4, src: "/pia2.png", alt: "Pia foto 4" },
    { id: 5, src: "/pia4.jpg", alt: "Pia foto 5" },
    { id: 6, src: "/pia1.jpg", alt: "Pia foto 6" },
    { id: 7, src: "/pia5.jpg", alt: "Pia foto 7" },
];
export function PhotoGallery() {
    const { ref, isVisible } = useScrollAnimation();
    const [currentIndex, setCurrentIndex] = useState(0);
    const rotationClasses = ["rotate-[-3deg]", "rotate-[2.5deg]", "rotate-[-1.5deg]", "rotate-[1.75deg]"];
    useEffect(() => {
        const timeout = setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex === photos.length - 1 ? 0 : prevIndex + 1));
        }, 4500);
        return () => clearTimeout(timeout);
    }, [currentIndex]);
    return (<section ref={ref} className="py-20 px-4 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}>
          <Camera className="w-16 h-16 text-primary mx-auto mb-6 animate-float"/>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground font-bold mb-4">
            Un recorrido de estos 15 años
          </h2>
          
        </div>

        <div className={`relative max-w-md mx-auto transition-all duration-700 delay-200 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}>
          {/* Carousel */}
          <div className={`group relative bg-white dark:bg-white shadow-[0_24px_48px_rgba(0,0,0,0.4)] transition-all duration-700 ease-out ${rotationClasses[currentIndex % rotationClasses.length]} hover:rotate-0 hover:shadow-[0_32px_64px_rgba(0,0,0,0.5)] hover:scale-105 p-4 pb-20`}>
            {/* Tape decoration at top */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-8 bg-white/80 dark:bg-white/80 shadow-md rotate-[-2deg] backdrop-blur-sm transition-all group-hover:rotate-0" aria-hidden="true"/>

            <div className="relative w-full aspect-square overflow-hidden rounded-sm">
                <Image src={photos[currentIndex].src || "/placeholder.svg"} alt={photos[currentIndex].alt} fill className={`object-cover transition-opacity duration-300 ${photos[currentIndex].src === "/pia3.jpg" ? "object-[0_-20px]" : ""}`}/>
            </div>

            {/* Heart decoration at bottom white space */}
            <div className="absolute bottom-6 right-6">
              <svg className="w-8 h-8 text-foreground/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {photos.map((_, index) => (<button key={index} onClick={() => setCurrentIndex(index)} className={`w-2.5 h-2.5 rounded-full transition-all ${index === currentIndex ? "bg-primary w-8" : "bg-muted"}`} aria-label={`Go to photo ${index + 1}`}/>))}
          </div>
        </div>
      </div>
    </section>);
}
