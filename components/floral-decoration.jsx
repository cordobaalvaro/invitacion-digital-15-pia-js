"use client";
import Image from "next/image";
export function FloralDecoration({ position = "top-left", size = "md", className = "", variant = 1, }) {
    const sizeClasses = {
        sm: "w-20 h-20 md:w-24 md:h-24",
        md: "w-24 h-24 md:w-32 md:h-32",
        lg: "w-32 h-32 md:w-40 md:h-40",
    };
    const positionClasses = {
        "top-left": "top-0 left-0 animate-slide-in-from-top-left",
        "top-right": "top-0 right-0 animate-slide-in-from-top-right",
        "bottom-left": "bottom-0 left-0 animate-slide-in-from-bottom-left",
        "bottom-right": "bottom-0 right-0 animate-slide-in-from-bottom-right",
        left: "top-1/2 left-0 -translate-y-1/2 animate-slide-in-from-left",
        right: "top-1/2 right-0 -translate-y-1/2 animate-slide-in-from-right",
    };
    const flowerImages = {
        1: "/images/flores-grupo02-a.webp",
        2: "/images/flores-grupo02-c.webp",
        3: "/images/flores-grupo04.webp",
        4: "/images/flores-grupo03.webp",
        5: "/images/flores-grupo01-a.webp",
    };
    return (<div className={`absolute ${positionClasses[position]} ${sizeClasses[size]} pointer-events-none z-10 opacity-70 ${className}`} aria-hidden="true">
      <Image src={flowerImages[variant] || flowerImages[1]} alt="" fill className="object-contain drop-shadow-md" priority/>
    </div>);
}
