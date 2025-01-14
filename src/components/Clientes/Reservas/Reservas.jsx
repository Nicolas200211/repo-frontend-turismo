import React, { useState } from "react";
import Modal from "react-modal";
import "./Reservas.scss";

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

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes manejar el envío del formulario, por ejemplo, enviarlo a una API
        console.log("Datos del formulario:", formData);
        onRequestClose(); // Cerrar el modal después de enviar el formulario
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Reservar un Viaje"
            className="modal"
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
                    />
                </label>
                <button type="submit">Enviar</button>
            </form>
        </Modal>
    );
};

export default ReservasModal;