"use client";
import { Sparkles, MapPin } from "lucide-react";
export function CelebrationSection() {
    const address = "calle 33 n368 V.M.Moreno";
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    return (<section className="py-20 px-4 bg-background relative overflow-hidden">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12 animate-scale-in">
          <Sparkles className="w-16 h-16 text-primary mx-auto mb-6 animate-float"/>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground font-bold">Celebración</h2>
        </div>

        <div className="bg-card rounded-3xl p-8 md:p-10 shadow-lg border-2 border-border transition-all hover:-translate-y-2 hover:shadow-2xl animate-slide-up animate-delay-200 relative overflow-hidden">
          {/* Flower decoration in top-left corner */}
          <div className="absolute -top-6 -left-6 w-32 h-32 opacity-60 animate-flower-float-delayed pointer-events-none">
            <img src="/images/flores-grupo03.webp" alt="" className="w-full h-full object-contain"/>
          </div>

          <div className="text-center space-y-6 relative z-10">
            <p className="text-muted-foreground text-base md:text-lg">
              Luego de la misa te espero para festejar conmigo en
            </p>
            <h3 className="font-serif text-2xl md:text-3xl text-foreground font-semibold">{address}</h3>

            <div className="mt-2">
              <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary hover:underline">
                <MapPin className="w-4 h-4"/>
                Abrir ubicación en Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>);
}
