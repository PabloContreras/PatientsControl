import React from 'react';
import Cita from './Cita';

const ListaCitas = ({citas, eliminarCita}) => ( 
    <div className="card mt-2 py-5">
        <div className="card-body ">
            <div className="card-title text-center">
                Administra las citas aquí
            </div>
            <div className="lista-citas">
                {citas.map(cita =>(
                    <Cita 
                        key = {cita.id}
                        cita = {cita}
                        eliminarCita = {eliminarCita}
                    />
                ))}
            </div>
        </div>
    </div>
);
 
export default ListaCitas;