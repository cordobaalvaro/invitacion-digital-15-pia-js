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
import { useState } from "react";
import { X, Check, Loader2, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { submitRsvp } from "@/lib/actions/rsvp-actions";
export function RsvpModal({ isOpen, onClose }) {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("idle");
    if (!isOpen)
        return null;
    const handleSubmit = (e) => __awaiter(this, void 0, void 0, function* () {
        e.preventDefault();
        if (!name.trim()) {
            toast.error("Por favor complete todos los campos requeridos");
            return;
        }
        setStatus("submitting");
        const result = yield submitRsvp({
            name: name.trim(),
            attending: true,
            message: message.trim() || undefined,
        });
        if (result.success) {
            setStatus("success");
            toast.success(result.message);
            setTimeout(() => {
                setName("");
                setMessage("");
                setStatus("idle");
                onClose();
            }, 2000);
        }
        else {
            setStatus("error");
            toast.error(result.message);
            setTimeout(() => {
                setStatus("idle");
            }, 2000);
        }
    });
    return (<div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="absolute inset-0 bg-foreground/60 backdrop-blur-[10px]" onClick={onClose}/>

      <div className="relative bg-card text-foreground rounded-[30px] p-8 md:p-10 max-w-md w-full shadow-2xl animate-slide-up overflow-hidden border border-border">
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-48 md:w-56 h-auto z-20 animate-float">
          <img src="/images/hydrangea-decoration.png" alt="" className="w-full h-auto drop-shadow-2xl"/>
        </div>

        <div className="absolute top-0 left-0 right-0 h-24 overflow-hidden">
          <img src="/images/floral-decoration.png" alt="" className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-auto opacity-20"/>
        </div>

        <div className="relative z-10 w-20 h-20 bg-background rounded-full shadow-lg flex items-center justify-center mx-auto mb-6 border-4 border-muted mt-8">
          <Sparkles className="w-10 h-10 text-primary"/>
        </div>

        <button onClick={onClose} className="absolute top-4 right-4 w-10 h-10 rounded-full bg-muted-foreground/60 flex items-center justify-center transition-all hover:bg-muted-foreground/80 z-20" aria-label="Close modal">
          <X className="w-5 h-5 text-background"/>
        </button>

        <h2 className="font-serif text-2xl md:text-3xl text-foreground font-semibold mb-6 text-center">
          Confirmación de asistencia
        </h2>

        {status === "success" ? (<div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-green-600"/>
            </div>
            <p className="text-xl text-foreground font-semibold">¡Confirmación recibida!</p>
            <p className="text-muted-foreground mt-2">Gracias por confirmar tu asistencia</p>
          </div>) : (<form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required className="w-full px-4 py-3 bg-background border-2 border-input rounded-xl focus:outline-none focus:border-ring focus:ring-2 focus:ring-ring/20 transition-all text-foreground placeholder:text-muted-foreground" placeholder="Ingrese su nombre completo" disabled={status === "submitting"}/>
            </div>

            <div>
              <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} rows={3} className="w-full px-4 py-3 bg-background border-2 border-input rounded-xl focus:outline-none focus:border-ring focus:ring-2 focus:ring-ring/20 transition-all text-foreground placeholder:text-muted-foreground resize-none" placeholder="Mensaje (opcional)" disabled={status === "submitting"}/>
            </div>

            <button type="submit" disabled={status === "submitting" || !name.trim()} className="w-full py-4 bg-primary !text-white !font-bold drop-shadow-[0_0_8px_white] rounded-full transition-all hover:bg-primary/90 hover:-translate-y-1 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2 uppercase tracking-wide">
              {status === "submitting" ? (<>
                  <Loader2 className="w-5 h-5 animate-spin text-white"/>
                  Enviando...
                </>) : ("Confirmar Asistencia")}
            </button>
          </form>)}
      </div>
    </div>);
}
