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
import { Loader2, Trash2, Edit2, Plus, Lock, Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";
import { getAllRsvps, deleteRsvp, updateRsvp, submitRsvp } from "@/lib/actions/rsvp-actions";
export default function AdminPage() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [rsvps, setRsvps] = useState([]);
    const [loading, setLoading] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [editForm, setEditForm] = useState({ name: "", message: "" });
    const [showAddForm, setShowAddForm] = useState(false);
    const [addForm, setAddForm] = useState({ name: "", message: "" });
    const [deletingId, setDeletingId] = useState(null);
    const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "";
    const handleLogin = (e) => {
        e.preventDefault();
        if (!ADMIN_PASSWORD) {
            toast.error("Contraseña no configurada. Agrega NEXT_PUBLIC_ADMIN_PASSWORD en .env.local y reinicia el servidor.");
            return;
        }
        if (password.trim() === ADMIN_PASSWORD.trim()) {
            setIsAuthenticated(true);
            toast.success("Acceso concedido");
            loadRsvps();
        }
        else {
            toast.error("Contraseña incorrecta");
        }
    };
    const loadRsvps = () => __awaiter(this, void 0, void 0, function* () {
        setLoading(true);
        const result = yield getAllRsvps();
        if (result.success) {
            setRsvps(result.data || []);
        }
        else {
            toast.error(result.message);
        }
        setLoading(false);
    });
    const handleDelete = (id) => __awaiter(this, void 0, void 0, function* () {
        setDeletingId(id);
        toast.error("¿Está seguro de eliminar esta confirmación?", {
            action: {
                label: "Eliminar",
                onClick: () => __awaiter(this, void 0, void 0, function* () {
                    const result = yield deleteRsvp(id);
                    if (result.success) {
                        toast.success(result.message);
                        setRsvps((prev) => prev.filter((rsvp) => rsvp.id !== id));
                    }
                    else {
                        toast.error(result.message);
                    }
                    setDeletingId(null);
                }),
            },
            cancel: {
                label: "Cancelar",
                onClick: () => {
                    setDeletingId(null);
                },
            },
        });
    });
    const handleEdit = (rsvp) => {
        setEditingId(rsvp.id);
        setEditForm({
            name: rsvp.name,
            message: rsvp.message || "",
        });
    };
    const handleUpdate = (id) => __awaiter(this, void 0, void 0, function* () {
        toast.info("¿Guardar los cambios?", {
            action: {
                label: "Guardar",
                onClick: () => __awaiter(this, void 0, void 0, function* () {
                    const result = yield updateRsvp(id, {
                        name: editForm.name,
                        attending: true,
                        message: editForm.message || undefined,
                    });
                    if (result.success) {
                        toast.success(result.message);
                        setEditingId(null);
                        setRsvps((prev) => prev.map((rsvp) => rsvp.id === id ? Object.assign(Object.assign({}, rsvp), { name: editForm.name, message: editForm.message || null }) : rsvp));
                    }
                    else {
                        toast.error(result.message);
                    }
                }),
            },
            cancel: {
                label: "Cancelar",
                onClick: () => { },
            },
        });
    });
    const handleAdd = () => __awaiter(this, void 0, void 0, function* () {
        if (!addForm.name.trim()) {
            toast.error("El nombre es requerido");
            return;
        }
        const result = yield submitRsvp({
            name: addForm.name,
            attending: true,
            message: addForm.message || undefined,
        });
        if (result.success) {
            toast.success(result.message);
            setShowAddForm(false);
            setAddForm({ name: "", message: "" });
            if (result.data) {
                setRsvps((prev) => [result.data, ...prev]);
            }
        }
        else {
            toast.error(result.message);
        }
    });
    if (!isAuthenticated) {
        return (<div className="min-h-screen bg-gradient-to-b from-[#e3eaf2] to-[#f0f4f8] flex items-center justify-center p-4">
        <div className="bg-card rounded-3xl p-8 md:p-10 max-w-md w-full shadow-xl border-2 border-border">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Lock className="w-10 h-10 text-primary"/>
          </div>
          <h1 className="text-3xl font-serif font-bold text-center mb-6 text-foreground">Panel de Administración</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="relative">
              <input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" className="w-full px-4 py-3 bg-background border-2 border-input rounded-xl focus:outline-none focus:border-ring focus:ring-2 focus:ring-ring/20 transition-all text-foreground pr-12" required/>
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors">
                {showPassword ? <EyeOff className="w-5 h-5"/> : <Eye className="w-5 h-5"/>}
              </button>
            </div>
            <button type="submit" className="w-full py-3 bg-primary !text-white font-semibold rounded-full hover:bg-primary/90 transition-all shadow-md hover:shadow-lg">
              Ingresar
            </button>
          </form>
        </div>
      </div>);
    }
    return (<div className="min-h-screen bg-gradient-to-b from-[#e3eaf2] to-[#f0f4f8] p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-card rounded-3xl p-6 md:p-8 shadow-xl border-2 border-border">
          <div className="flex items-center justify-between mb-6 gap-4">
            <h1 className="text-2xl md:text-3xl font-serif font-bold text-foreground">Lista de Confirmaciones</h1>
            <button onClick={() => setShowAddForm(!showAddForm)} className="text-white flex items-center gap-2 px-3 md:px-4 py-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all whitespace-nowrap">
              <Plus className="w-5 h-5 flex-shrink-0"/>
              <span className="hidden sm:inline text-white">Agregar</span>
            </button>
          </div>

          {showAddForm && (<div className="bg-muted/50 rounded-2xl p-6 mb-6 border-2 border-border">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Agregar Nueva Confirmación</h3>
              <div className="space-y-4">
                <input type="text" value={addForm.name} onChange={(e) => setAddForm(Object.assign(Object.assign({}, addForm), { name: e.target.value }))} placeholder="Nombre completo" className="w-full px-4 py-2 bg-background border-2 border-input rounded-xl focus:outline-none focus:border-ring text-foreground"/>
                <textarea value={addForm.message} onChange={(e) => setAddForm(Object.assign(Object.assign({}, addForm), { message: e.target.value }))} placeholder="Mensaje (opcional)" rows={2} className="w-full px-4 py-2 bg-background border-2 border-input rounded-xl focus:outline-none focus:border-ring text-foreground resize-none"/>
                <div className="flex gap-2">
                  <button onClick={handleAdd} className="px-4 py-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all text-white">
                    Guardar
                  </button>
                  <button onClick={() => {
                setShowAddForm(false);
                setAddForm({ name: "", message: "" });
            }} className="px-4 py-2 bg-muted text-foreground rounded-full hover:bg-muted/80 transition-all">
                    Cancelar
                  </button>
                </div>
              </div>
            </div>)}

          {loading ? (<div className="flex items-center justify-center py-12">
              <Loader2 className="w-8 h-8 animate-spin text-primary"/>
            </div>) : rsvps.length === 0 ? (<p className="text-center text-muted-foreground py-12">No hay confirmaciones aún</p>) : (<div className="space-y-4">
              {rsvps.map((rsvp) => (<div key={rsvp.id} className="bg-background rounded-2xl p-4 md:p-6 border-2 border-border hover:border-primary/50 transition-all">
                  {editingId === rsvp.id ? (<div className="space-y-4">
                      <input type="text" value={editForm.name} onChange={(e) => setEditForm(Object.assign(Object.assign({}, editForm), { name: e.target.value }))} className="w-full px-4 py-2 bg-card border-2 border-input rounded-xl focus:outline-none focus:border-ring text-foreground"/>
                      <textarea value={editForm.message} onChange={(e) => setEditForm(Object.assign(Object.assign({}, editForm), { message: e.target.value }))} placeholder="Mensaje (opcional)" rows={2} className="w-full px-4 py-2 bg-card border-2 border-input rounded-xl focus:outline-none focus:border-ring text-foreground resize-none"/>
                      <div className="flex gap-2">
                        <button onClick={() => handleUpdate(rsvp.id)} className="px-4 py-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all">
                          Guardar
                        </button>
                        <button onClick={() => setEditingId(null)} className="px-4 py-2 bg-muted text-foreground rounded-full hover:bg-muted/80 transition-all">
                          Cancelar
                        </button>
                      </div>
                    </div>) : (<div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground mb-1">{rsvp.name}</h3>
                        {rsvp.message && <p className="text-muted-foreground text-sm mb-2">"{rsvp.message}"</p>}
                        <p className="text-xs text-muted-foreground">
                          {new Date(rsvp.created_at).toLocaleDateString("es-AR", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                    })}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <button onClick={() => handleEdit(rsvp)} className="p-2 bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-all">
                          <Edit2 className="w-4 h-4"/>
                        </button>
                        <button onClick={() => handleDelete(rsvp.id)} className="p-2 bg-red-100 text-red-600 rounded-full hover:bg-red-200 transition-all">
                          <Trash2 className="w-4 h-4"/>
                        </button>
                      </div>
                    </div>)}
                </div>))}
            </div>)}
        </div>
      </div>
    </div>);
}
