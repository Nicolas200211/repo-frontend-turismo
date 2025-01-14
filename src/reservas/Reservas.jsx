import { useState } from 'react';
import './Reservas.css';
import './Reservas.scss';

const mockData = [
    { nombre: "Juan Pérez", email: "juan@ejemplo.com", destino: "Cusco", fecha: new Date(), personas: 2 },
    { nombre: "María López", email: "maria@ejemplo.com", destino: "Machu Picchu", fecha: new Date(), personas: 3 },
    { nombre: "Carlos Rodríguez", email: "carlos@ejemplo.com", destino: "Valle Sagrado", fecha: new Date(), personas: 4 },
    { nombre: "Ana García", email: "ana@ejemplo.com", destino: "Lima", fecha: new Date(), personas: 1 },
    { nombre: "Pedro Díaz", email: "pedro@ejemplo.com", destino: "Arequipa", fecha: new Date(), personas: 2 }
];

const Reservas = () => {
    const [reservas, setReservas] = useState(mockData);
    const [editingIndex, setEditingIndex] = useState(null);
    const [editedReserva, setEditedReserva] = useState({});

    const handleDelete = (index) => {
        const nuevasReservas = reservas.filter((_, i) => i !== index);
        setReservas(nuevasReservas);
    };

    const handleEdit = (index) => {
        setEditingIndex(index);
        setEditedReserva(reservas[index]);
    };

    const handleSave = () => {
        const nuevasReservas = [...reservas];
        nuevasReservas[editingIndex] = editedReserva;
        setReservas(nuevasReservas);
        setEditingIndex(null);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedReserva({
            ...editedReserva,
            [name]: name === "personas" ? parseInt(value, 10) : value
        });
    };

    return (
        <div className="reservas-container h-[950px] p-[200px]">
            <h1 className="title mt-[150px]">Lista de Reservas</h1>
            <div className="reservas-list  ">
                {reservas.map((reserva, index) => (
                    <div key={index} className="reserva-card">
                        {editingIndex === index ? (
                            <div className="edit-form">
                                <input
                                    type="text"
                                    name="nombre"
                                    value={editedReserva.nombre}
                                    onChange={handleChange}
                                    placeholder="Nombre"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    value={editedReserva.email}
                                    onChange={handleChange}
                                    placeholder="Email"
                                />
                                <input
                                    type="text"
                                    name="destino"
                                    value={editedReserva.destino}
                                    onChange={handleChange}
                                    placeholder="Destino"
                                />
                                <input
                                    type="date"
                                    name="fecha"
                                    value={new Date(editedReserva.fecha).toISOString().split("T")[0]}
                                    onChange={(e) =>
                                        setEditedReserva({
                                            ...editedReserva,
                                            fecha: new Date(e.target.value),
                                        })
                                    }
                                />
                                <input
                                    type="number"
                                    name="personas"
                                    value={editedReserva.personas}
                                    onChange={handleChange}
                                    placeholder="Personas"
                                />
                                <div className="action-buttons">
                                    <button className="btn-save" onClick={handleSave}>Guardar</button>
                                    <button className="btn-cancel" onClick={() => setEditingIndex(null)}>Cancelar</button>
                                </div>
                            </div>
                        ) : (
                            <>
                                <h2>{reserva.nombre}</h2>
                                <p><strong>Email:</strong> {reserva.email}</p>
                                <p><strong>Destino:</strong> {reserva.destino}</p>
                                <p><strong>Fecha:</strong> {reserva.fecha.toDateString()}</p>
                                <p><strong>Personas:</strong> {reserva.personas}</p>
                                <div className="action-buttons">
                                    <button className="btn-edit" onClick={() => handleEdit(index)}>Editar</button>
                                    <button className="btn-delete" onClick={() => handleDelete(index)}>Eliminar</button>
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Reservas;
