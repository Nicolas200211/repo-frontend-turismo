// src/services/app.js

const API_URL = 'http://localhost:3001';

export const reservasService = {

    // Obtener todas las reservas
    getAllReservas: async () => {
        try {
            const response = await fetch(`${API_URL}/all`);
            if (!response.ok) throw new Error('Error al obtener las reservas');
            return await response.json();
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    },

    // Obtener una reserva por ID
    getReservaById: async (id) => {
        try {
            const response = await fetch(`${API_URL}/reserva/${id}`);
            if (!response.ok) throw new Error('Error al obtener la reserva');
            return await response.json();
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    },

    // Crear una nueva reserva
    createReserva: async (reservaData) => {
        try {
            const response = await fetch(`${API_URL}/create`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(reservaData)
            });
            if (!response.ok) throw new Error('Error al crear la reserva');
            return await response.json();
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    },

    // Actualizar una reserva existente
    updateReserva: async (id, updateData) => {
        try {
            const response = await fetch(`${API_URL}/update/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updateData)
            });
            if (!response.ok) throw new Error('Error al actualizar la reserva');
            return await response.json();
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    },

    // Eliminar una reserva
    deleteReserva: async (id) => {
        try {
            const response = await fetch(`${API_URL}/delete/${id}`, {
                method: 'DELETE'
            });
            if (!response.ok) throw new Error('Error al eliminar la reserva');
            return await response.json();
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }

};
