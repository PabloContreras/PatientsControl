import React from 'react';

const Cita = ({cita, eliminarCita}) => (  
    <div className="media mt-3">
        <div className="media-body">
            <h3 className="mt-0">{cita.mascota}</h3>
            <p className="card-text"><span>Propietario: </span>{cita.propietario}</p>
            <p className="card-text"><span>Fecha y hora: </span>{cita.fecha} {cita.hora}</p>
            <p className="card-text"><span>Sintomas: </span>{cita.sintomas}</p>
            <button className="btn btn-danger" 
            onClick = { () => eliminarCita(cita.id) }>
                Eliminar
            </button>
        </div>

    </div>
);
 
export default Cita;