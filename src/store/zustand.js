import { create } from 'zustand'
import { reservasService } from '../services/app'

export const useReservasStore = create((set) => ({
    // Estado inicial
    reservas: [],
    loading: false,
    error: null,

    // Acciones
    fetchReservas: async () => {
        set({ loading: true });
        try {
            const data = await reservasService.getAllReservas();
            set({ reservas: data, loading: false });
        } catch (error) {
            set({ error: error.message, loading: false });
        }
    },

    crearReserva: async (nuevaReserva) => {
        try {
            const response = await reservasService.createReserva(nuevaReserva);
            set((state) => ({
                reservas: [...state.reservas, response]
            }));
            // Recargar reservas después de crear
            await useReservasStore.getState().fetchReservas();
        } catch (error) {
            set({ error: error.message });
        }
    },

    actualizarReserva: async (id, reservaActualizada) => {
        try {
            await reservasService.updateReserva(id, reservaActualizada);
            set((state) => ({
                reservas: state.reservas.map(r => 
                    r.id === id ? reservaActualizada : r
                )
            }));
        } catch (error) {
            set({ error: error.message });
        }
    },

    eliminarReserva: async (id) => {
        if (!id) {
            set({ error: "ID de reserva no válido" });
            return;
        }

        set({ loading: true });
        try {
            const response = await reservasService.deleteReserva(id);
            if (response) {
                set((state) => ({
                    reservas: state.reservas.filter(r => r.id !== id),
                    loading: false,
                    error: null
                }));
            }
        } catch (error) {
            console.error("Error al eliminar:", error);
            set({ 
                error: "Error al eliminar la reserva. Por favor, intente nuevamente.",
                loading: false 
            });
        }
    }
}));