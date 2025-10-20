import { Church } from "lucide-react";
export function CeremonySection() {
    return (<section className="py-20 px-4 bg-gradient-to-b from-muted to-background relative overflow-hidden">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12 animate-scale-in">
          <Church className="w-16 h-16 text-primary mx-auto mb-6 animate-float"/>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground font-bold">Ceremonia religiosa</h2>
        </div>

        <div className="group bg-card rounded-3xl p-8 md:p-10 shadow-lg shadow-primary/5 border border-border/50 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/20 animate-slide-up animate-delay-200 relative overflow-hidden">
          
          <div className="absolute -top-4 -left-4 w-24 h-24 opacity-60 group-hover:opacity-80 transition-opacity duration-500 animate-flower-float pointer-events-none">
            <img src="/images/flores-grupo02-a.webp" alt="" className="w-full h-full object-contain"/>
          </div>

          <div className="text-center space-y-4 relative z-10">
            <div className="text-2xl md:text-3xl">
              <span className="text-primary font-serif font-bold">07 de noviembre</span>
              <span className="text-foreground mx-2">•</span>
              <span className="text-foreground">20:00 hs</span>
            </div>
            <h3 className="font-serif text-2xl md:text-3xl text-foreground font-semibold">
              Iglesia Virgen de la Merced
            </h3>
            <p className="text-muted-foreground text-base md:text-lg">(24 de Septiembre esq. Virgen de la Merced)</p>
          </div>
        </div>
      </div>
    </section>);
}
