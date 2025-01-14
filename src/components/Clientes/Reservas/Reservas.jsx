import React, { useState } from "react";
import Modal from "react-modal";
import "./Reservas.scss";
import { reservasService } from "../../../services/app";

Modal.setAppElement("#root");

const ReservasModal = ({ isOpen, onRequestClose }) => {
    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        destino: "",
        fecha: "",
        personas: 1,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Formatear los datos antes de enviar
            const formattedData = {
                ...formData,
                fecha: new Date(formData.fecha).toISOString(),
                personas: parseInt(formData.personas)
            };

            // Validar datos requeridos
            if (!formattedData.nombre || !formattedData.email || !formattedData.destino || !formattedData.fecha) {
                throw new Error("Todos los campos son requeridos");
            }

            // Enviar datos al servidor
            const response = await reservasService.createReserva(formattedData);

            if (response) {
                console.log("Reserva creada exitosamente:", response);
                // Limpiar formulario
                setFormData({
                    nombre: "",
                    email: "",
                    destino: "",
                    fecha: "",
                    personas: 1,
                });
                onRequestClose();
            }
        } catch (error) {
            console.error("Error al crear la reserva:", error.message);
            // Aquí podrías agregar un estado para mostrar el error en la UI
            alert("Error al crear la reserva: " + error.message);
        }
    };
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Reservar un Viaje"
            className="!text-black modal"
            overlayClassName="overlay"
        >
            <h2>Reservar un Viaje</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Nombre:
                    <input
                        type="text"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                        className="text-black"
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="text-black"
                    />
                </label>
                <label>
                    Destino:
                    <input
                        type="text"
                        name="destino"
                        value={formData.destino}
                        onChange={handleChange}
                        required
                        className="text-black"
                    />
                </label>
                <label>
                    Fecha:
                    <input
                        type="date"
                        name="fecha"
                        value={formData.fecha}
                        onChange={handleChange}
                        required
                        className="text-black"
                    />
                </label>
                <label>
                    Número de personas:
                    <input
                        type="number"
                        name="personas"
                        value={formData.personas}
                        onChange={handleChange}
                        min="1"
                        required
                        className="text-black"
                    />
                </label>
                <button type="submit">Enviar</button>
            </form>
        </Modal>
    );
};

export default ReservasModal;