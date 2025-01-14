import { useEffect, useState } from 'react';
import './Reservas.css';
import './Reservas.scss';
import { reservasService } from '../services/app';

// const mockData = [
//     { nombre: "Juan Pérez", email: "juan@ejemplo.com", destino: "Cusco", fecha: new Date(), personas: 2 },
//     { nombre: "María López", email: "maria@ejemplo.com", destino: "Machu Picchu", fecha: new Date(), personas: 3 },
//     { nombre: "Carlos Rodríguez", email: "carlos@ejemplo.com", destino: "Valle Sagrado", fecha: new Date(), personas: 4 },
//     { nombre: "Ana García", email: "ana@ejemplo.com", destino: "Lima", fecha: new Date(), personas: 1 },
//     { nombre: "Pedro Díaz", email: "pedro@ejemplo.com", destino: "Arequipa", fecha: new Date(), personas: 2 }
// ];

const Reservas = () => {
    const [reservas, setReservas] = useState([]);
    const [editingIndex, setEditingIndex] = useState(null);
    const [editedReserva, setEditedReserva] = useState({});
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchReservas = async () => {
            try {
                setLoading(true);
                const reservas = await reservasService.getAllReservas();
                setReservas(reservas);
            } catch (error) {
                console.error("Error al cargar reservas:", error);
                setReservas([]);
            } finally {
                setLoading(false);
            }
        }
        fetchReservas();
    }, [])

    const handleDelete = async (index) => {
        const nuevasReservas = reservas.filter((_, i) => i !== index);

        try {
            await reservasService.deleteReserva(reservas[index].id);
            setReservas(nuevasReservas);

        } catch (error) {
            console.error("Error al eliminar la reserva:", error);

        }
    };

    const handleEdit = async (index) => {
        setEditingIndex(index);
        try {
            const reserva = await reservasService.getReservaById(reservas[index].id);
            setEditedReserva(reserva);

        } catch (error) {
            console.error("Error al obtener la reserva:", error);
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

    const handleSave = async () => {
        const nuevasReservas = [...reservas];
        nuevasReservas[editingIndex] = editedReserva;
        try {
            await reservasService.updateReserva(editedReserva.id, editedReserva);
            setReservas(nuevasReservas);
            setEditingIndex(null);

        } catch (error) {
            console.error("Error al actualizar la reserva:", error);

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
