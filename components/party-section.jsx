"use client";
import { Sparkles, MapPin } from "lucide-react";
export function PartySection() {
    const placeName = "Kali Eventos";
    const address = "Ingreso B° Buenos Aires, altura colectora norte";
    const mapsQuery = `${placeName}, ${address}`;
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapsQuery)}`;
    return (<section className="py-20 px-4 bg-background relative overflow-hidden">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12 animate-scale-in">
          <Sparkles className="w-16 h-16 text-primary mx-auto mb-6 animate-float"/>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground font-bold">La fiesta</h2>
        </div>

        <div className="bg-card rounded-3xl p-8 md:p-10 shadow-lg border-2 border-border transition-all hover:-translate-y-2 hover:shadow-2xl animate-slide-up animate-delay-200 relative overflow-hidden">
         
          <div className="absolute -top-6 -left-6 w-32 h-32 opacity-60 animate-flower-float-delayed pointer-events-none">
            <img src="/images/flores-grupo03.webp" alt="" className="w-full h-full object-contain"/>
          </div>

          <div className="text-center space-y-6 relative z-10">
            <div className="text-2xl md:text-3xl">
              <span className="text-primary font-serif font-bold">15 de noviembre</span>
              <span className="text-foreground mx-2">•</span>
              <span className="text-foreground">22:00 hs</span>
            </div>
            <h3 className="font-serif text-2xl md:text-3xl text-foreground font-semibold">{placeName}</h3>
            <p className="text-muted-foreground text-base md:text-lg">{address}</p>
            <div className="mt-2">
              <div className="relative rounded-2xl overflow-hidden border border-border bg-muted/10">
                <iframe title={`Mapa - ${placeName}`} src={`https://www.google.com/maps?q=${encodeURIComponent(mapsQuery)}&output=embed`} className="w-full h-[300px] md:h-[360px]" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>
              </div>
              <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-primary hover:underline">
                <MapPin className="w-4 h-4"/>
                Abrir en Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>);
}
