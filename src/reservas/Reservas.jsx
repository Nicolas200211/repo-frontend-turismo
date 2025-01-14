import { useEffect, useState } from 'react';
import './Reservas.css';
import './Reservas.scss';
import { useReservasStore } from '../store/zustand';


const Reservas = () => {
    const {
        reservas,
        loading,
        fetchReservas,
        eliminarReserva,
        actualizarReserva
    } = useReservasStore();

    const [editingIndex, setEditingIndex] = useState(null);
    const [editedReserva, setEditedReserva] = useState({});

    useEffect(() => {
        fetchReservas();
    }, [fetchReservas]);

    const handleDelete = async (reserva) => {
        try {
            if (!reserva.id) {
                console.error("ID de reserva no válido");
                return;
            }

            // Confirmar eliminación
            if (window.confirm('¿Estás seguro de eliminar esta reserva?')) {
                await eliminarReserva(reserva.id);
                await fetchReservas();
            }
        } catch (error) {
            console.error("Error al eliminar:", error);
        }
    };

    const handleEdit = async (index) => {
        setEditingIndex(index);
        setEditedReserva(reservas[index]);
    };

    const handleSave = async () => {
        try {
            await actualizarReserva(editedReserva.id, editedReserva);
            setEditingIndex(null);
            await fetchReservas();
        } catch (error) {
            console.error("Error al actualizar:", error);
        }
    };

    const formatDate = (date) => {
        try {
            if (!date) return '';
            const d = new Date(date);
            if (isNaN(d.getTime())) return '';
            return d.toISOString().split('T')[0];
        } catch {
            return '';
        }
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
                {
                    loading && <p>Cargando reservas...</p>
                }
                {reservas?.map((reserva, index) => (
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
                                    value={formatDate(editedReserva.fecha)}
                                    onChange={(e) => {
                                        const newDate = e.target.value ? new Date(e.target.value) : new Date();
                                        setEditedReserva({
                                            ...editedReserva,
                                            fecha: newDate
                                        });
                                    }}
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
                                <p><strong>Fecha:</strong> {reserva.fecha instanceof Date ? reserva.fecha.toDateString() : 'Fecha inválida'}</p>
                                <p><strong>Personas:</strong> {reserva.personas}</p>
                                <div className="action-buttons">
                                    <button className="btn-edit" onClick={() => handleEdit(index)}>Editar</button>
                                    <button className="btn-delete" onClick={() => handleDelete(reserva)}>Eliminar</button>
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
