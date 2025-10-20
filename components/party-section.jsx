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
                <iframe title="Mapa - Kali Eventos" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d222.66062344217357!2d-65.2400798892512!3d-26.758095554467104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942267341e105661%3A0x60628b5e842975cf!2sKali%20Eventos!5e0!3m2!1ses!2sar!4v1760986494945!5m2!1ses!2sar" className="w-full h-[300px] md:h-[360px]" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              </div>
              <a href="https://www.google.com/maps/place/Kali+Eventos/@-26.7580956,-65.2400799,19z/data=!4m6!3m5!1s0x942267341e105661:0x60628b5e842975cf!8m2!3d-26.7580956!4d-65.2400799!16s%2Fg%2F11c5w2w2w2?entry=ttu" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-primary hover:underline">
                <MapPin className="w-4 h-4"/>
                Abrir en Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>);
}
