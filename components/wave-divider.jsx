export function WaveDivider({ flip = false, color = "light", className = "" }) {
    const colorClass = color === "blue"
        ? "text-[#4A90E2]"
        : color === "white"
            ? "text-white"
            : "text-[#E3EAF2]";
    return (<div className={`w-full overflow-hidden ${flip ? "rotate-180" : ""} ${className}`}>
  <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className={`w-full h-12 md:h-16 ${colorClass} dark:hidden`}>
        <path d="M0,50 C300,100 500,0 800,50 C1000,80 1100,40 1200,60 L1200,120 L0,120 Z" fill="currentColor" opacity="0.8"/>
        <path d="M0,70 C300,20 600,90 900,60 C1050,45 1150,80 1200,70 L1200,120 L0,120 Z" fill="currentColor" opacity="0.5"/>
      </svg>
    </div>);
}
