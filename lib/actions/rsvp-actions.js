"use server";
import { createClient } from "@/lib/supabase/server";

export async function submitRsvp(formData) {
    try {
        const supabase = await createClient();
        const { data, error } = await supabase
            .from("rsvps")
            .insert({
                name: formData.name.trim(),
                attending: formData.attending,
                message: (formData.message?.trim()) || null,
            })
            .select()
            .single();

        if (error) {
            console.error("[v0] Error submitting RSVP:", error);
            return {
                success: false,
                message: "Error al enviar la confirmación. Por favor, intente nuevamente.",
            };
        }

        return {
            success: true,
            message: "¡Confirmación recibida exitosamente!",
            data,
        };
    } catch (error) {
        console.error("[v0] Unexpected error:", error);
        return {
            success: false,
            message: "Ocurrió un error inesperado. Por favor, intente nuevamente.",
        };
    }
}

export async function getAllRsvps() {
    try {
        const supabase = await createClient();
        const { data, error } = await supabase
            .from("rsvps")
            .select("*")
            .order("created_at", { ascending: false });

        if (error) {
            console.error("[v0] Error fetching RSVPs:", error);
            return {
                success: false,
                message: "Error al cargar las confirmaciones.",
            };
        }

        return {
            success: true,
            message: "Confirmaciones cargadas exitosamente.",
            data,
        };
    } catch (error) {
        console.error("[v0] Unexpected error:", error);
        return {
            success: false,
            message: "Ocurrió un error inesperado.",
        };
    }
}

export async function updateRsvp(id, formData) {
    try {
        const supabase = await createClient();
        const { data, error } = await supabase
            .from("rsvps")
            .update({
                name: formData.name.trim(),
                attending: formData.attending,
                message: (formData.message?.trim()) || null,
            })
            .eq("id", id)
            .select()
            .single();

        if (error) {
            console.error("[v0] Error updating RSVP:", error);
            return {
                success: false,
                message: "Error al actualizar la confirmación.",
            };
        }

        return {
            success: true,
            message: "Confirmación actualizada exitosamente.",
            data,
        };
    } catch (error) {
        console.error("[v0] Unexpected error:", error);
        return {
            success: false,
            message: "Ocurrió un error inesperado.",
        };
    }
}

export async function deleteRsvp(id) {
    try {
        const supabase = await createClient();
        const { error } = await supabase.from("rsvps").delete().eq("id", id);

        if (error) {
            console.error("[v0] Error deleting RSVP:", error);
            return {
                success: false,
                message: "Error al eliminar la confirmación.",
            };
        }

        return {
            success: true,
            message: "Confirmación eliminada exitosamente.",
        };
    } catch (error) {
        console.error("[v0] Unexpected error:", error);
        return {
            success: false,
            message: "Ocurrió un error inesperado.",
        };
    }
}
