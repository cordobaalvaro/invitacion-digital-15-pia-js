"use client";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Gift, Copy, Check } from "lucide-react";
import { useState } from "react";
export function GiftSection() {
    const [copied, setCopied] = useState(false);
    const cbu = "piaferr01";
    const copyToClipboard = () => __awaiter(this, void 0, void 0, function* () {
        try {
            if (typeof navigator !== "undefined" && navigator.clipboard && window.isSecureContext !== false) {
                yield navigator.clipboard.writeText(cbu);
            }
            else {
                const textarea = document.createElement("textarea");
                textarea.value = cbu;
                textarea.setAttribute("readonly", "");
                textarea.style.position = "fixed";
                textarea.style.top = "-9999px";
                document.body.appendChild(textarea);
                textarea.select();
                document.execCommand("copy");
                document.body.removeChild(textarea);
            }
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
        catch (err) {
            try {
                const textarea = document.createElement("textarea");
                textarea.value = cbu;
                textarea.setAttribute("readonly", "");
                textarea.style.position = "fixed";
                textarea.style.top = "-9999px";
                document.body.appendChild(textarea);
                textarea.select();
                document.execCommand("copy");
                document.body.removeChild(textarea);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            }
            catch (e) {
                console.error("No se pudo copiar el alias", e);
            }
        }
    });
    return (<section className="py-20 px-4 bg-gradient-to-b from-[#e3eaf2] to-[#f0f4f8] dark:from-[#0b1220] dark:to-[#0f1a2a] relative overflow-hidden">
      <div className="max-w-2xl mx-auto text-center">
        <Gift className="w-20 h-20 text-[#0055A4] dark:text-[#8ab4ff] mx-auto mb-8 animate-float animate-scale-in"/>

        <h2 className="font-serif text-4xl md:text-5xl text-[#1e3a5f] dark:text-[#e6edf3] font-bold mb-8 animate-fade-in animate-delay-100">
          Regalo
        </h2>

        <p className="text-[#1e3a5f] dark:text-[#c7d1e0] text-lg md:text-xl leading-relaxed mb-8 px-4 animate-slide-up animate-delay-200">
          Mi regalo más valioso será tu compañía. Si deseas obsequiarme algo, agradezco que sea a este alias:
        </p>

        <div className="bg-white dark:bg-neutral-900/70 rounded-3xl p-8 md:p-10 border-3 border-[#4A90E2] shadow-lg max-w-md mx-auto animate-scale-in animate-delay-300 hover:scale-105 transition-transform relative overflow-hidden">
          <div className="absolute -bottom-4 -right-4 w-24 h-24 opacity-50 animate-flower-float pointer-events-none">
            <img src="/images/flores-grupo01-a.webp" alt="" className="w-full h-full object-contain"/>
          </div>

          <div className="space-y-3 relative z-10">
            <div className="font-serif text-3xl md:text-4xl text-[#1e3a5f] dark:text-[#e6edf3] font-bold">{cbu}</div>
            <p className="text-[#0055A4] dark:text-[#9ecbff] text-sm md:text-base">(a nombre de Fernández Pia Anahí)</p>

            <button onClick={copyToClipboard} className="mt-4 inline-flex items-center gap-2 px-6 py-3 bg-[#1e3a5f] dark:bg-[#0b2a55] text-white rounded-full transition-all hover:-translate-y-1 hover:shadow-lg hover:scale-105" title="Copiar alias" aria-live="polite">
              {copied ? (<>
                  <Check className="w-4 h-4"/>
                  ¡Copiado!
                </>) : (<>
                  <Copy className="w-4 h-4"/>
                  Copiar alias
                </>)}
            </button>
          </div>
        </div>
      </div>
    </section>);
}
