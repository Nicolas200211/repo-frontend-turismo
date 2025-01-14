const mockData = [
    {
        nombre: "Juan Pérez",
        email: "juan@ejemplo.com",
        destino: "Cusco",
        fecha: new Date(),
        personas: 2
    },
    {
        nombre: "María López",
        email: "maria@ejemplo.com",
        destino: "Machu Picchu",
        fecha: new Date(),
        personas: 3
    },
    {
        nombre: "Carlos Rodríguez",
        email: "carlos@ejemplo.com",
        destino: "Valle Sagrado",
        fecha: new Date(),
        personas: 4
    },
    {
        nombre: "Ana García",
        email: "ana@ejemplo.com",
        destino: "Lima",
        fecha: new Date(),
        personas: 1
    },
    {
        nombre: "Pedro Díaz",
        email: "pedro@ejemplo.com",
        destino: "Arequipa",
        fecha: new Date(),
        personas: 2
    },
    {
        nombre: "Laura Torres",
        email: "laura@ejemplo.com",
        destino: "Nazca",
        fecha: new Date(),
        personas: 5
    },
    {
        nombre: "Diego Vargas",
        email: "diego@ejemplo.com",
        destino: "Iquitos",
        fecha: new Date(),
        personas: 2
    },
    {
        nombre: "Sofia Castro",
        email: "sofia@ejemplo.com",
        destino: "Puno",
        fecha: new Date(),
        personas: 3
    },
    {
        nombre: "Roberto Flores",
        email: "roberto@ejemplo.com",
        destino: "Huacachina",
        fecha: new Date(),
        personas: 2
    },
    {
        nombre: "Carmen Ruiz",
        email: "carmen@ejemplo.com",
        destino: "Mancora",
        fecha: new Date(),
        personas: 4
    }
];

const Reservas = () => {
    return (
        <div>
            {
                mockData.map((reserva, index) => {
                    return (
                        <div key={index}>
                            <p>Nombre: {reserva.nombre}</p>
                            <p>Email: {reserva.email}</p>
                            <p>Destino: {reserva.destino}</p>
                            <p>Fecha: {reserva.fecha.toDateString()}</p>
                            <p>Personas: {reserva.personas}</p>
                            <hr />
                        </div>
                    );
                })
            }
        </div>
    );
}

export default Reservas;