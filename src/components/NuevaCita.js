import React, { Component } from 'react';
import uuid from 'uuid';

const stateInitial = {
    cita : {
        mascota : '',
        propietario : '',
        fecha : '',
        hora : '',
        sintomas : ''
    }, 
    error : false
}

class NuevaCita extends Component {
    state = { ...stateInitial }

    handleChange = e => {
        console.log( e.target.name + ' : ' +  e.target.value);
        // modificar el state
        this.setState({
            cita : {
                ...this.state.cita, 
                [e.target.name] : e.target.value
            }
        });
    }
    handleSubmit = e =>{
        e.preventDefault();
        //Extraer los valores del state
        const { mascota, propietario, fecha, hora, sintomas } = this.state.cita;
        //Validar que todos los campos estén llenos
        if( mascota === '' || propietario === '' || fecha === '' || hora === '' || sintomas === '' ){
            this.setState({
                error : true
            });
            return;
        }
        // Generar objeto con id 
        const nuevaCita = {...this.state.cita};
        nuevaCita.id = uuid();
        //Agregar citas al state
        this.props.crearNuevaCita(nuevaCita);
        // colocar en el state el state initial
        this.setState({
            ...stateInitial
        });
    }

    render() { 
        const {error} = this.state;
        return ( 
            <div className="card mt-5 py-5">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5">
                        Llena el formulario
                    </h2>
                </div>
                { error ? <div className="alert alert-danger mt-3 mb-5"> Todos los campos son obligatorios </div> : null }
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group row">
                        <label className="col-sm-4 col-md-4 col-form-label ml-5">
                            Nombre de la mascota
                        </label>
                        <div className="col-sm-8 col-md-7">
                            <input 
                                type="text"
                                className="form-control"
                                placeholder="Nombre de la mascota"
                                name="mascota"
                                onChange = {this.handleChange}
                                value = {this.state.cita.mascota}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-4 col-md-4 col-form-label ml-5">
                            Nombre del dueño
                        </label>
                        <div className="col-sm-8 col-md-7">
                            <input 
                                type="text"
                                className="form-control"
                                placeholder="Nombre del dueño"
                                name="propietario"
                                onChange = {this.handleChange}
                                value = {this.state.cita.propietario}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-md-2 col-form-label ml-5">
                            Fecha
                        </label>
                        <div className="col-sm-2 col-md-4">
                            <input 
                                type="date"
                                className="form-control"
                                name="fecha"
                                onChange = {this.handleChange}
                                value = {this.state.cita.fecha}
                            />
                        </div>
                        <label className="col-sm-2 col-md-2 col-form-label ml-5">
                            Hora
                        </label>
                        <div className="col-sm-2 col-md-2">
                            <input 
                                type="time"
                                className="form-control"
                                name="hora"
                                onChange = {this.handleChange}
                                value = {this.state.cita.hora}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-4 col-md-4 col-form-label ml-5 mt-2">
                            Sintomas
                        </label>
                        <div className="col-sm-8 col-md-7">
                            <textarea className="form-control" name="sintomas" 
                                onChange = {this.handleChange}
                                value = {this.state.cita.sintomas}>
                            </textarea> 
                        </div>
                    </div>
                    <input type="submit" className="py-3 mt-2 btn btn-success btn-block col-md-4 offset-4" value="Agregar nueva cita">

                    </input>
                </form>
            </div>
        );
    }
}
 
export default NuevaCita;