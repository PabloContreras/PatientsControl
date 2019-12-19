import React, {Component} from 'react';
import './bootstrap.min.css';
import Header from './components/Header';
import NuevaCita from './components/NuevaCita';
import ListaCitas from './components/ListaCitas';

class App extends Component {
  state = {  
    citas : [

    ]
  }
  componentWillMount() {
    const citasLS = localStorage.getItem('citas');
    if( citasLS ){
      this.setState({
        citas : JSON.parse(citasLS)
      })
    }
  }
  componentDidUpdate() {
    localStorage.setItem('citas', JSON.stringify(this.state.citas));
  }
  crearNuevaCita = datos =>{
    // Copiar state actual
    const citas = [...this.state.citas, datos];
    //Agregar nuevo state 
    this.setState({
      citas : citas
    })

  }
  eliminarCita = id => {
    // Copiar el state
    const citasActuales = [...this.state.citas];
    // Sacar la cita del state
    const citas = citasActuales.filter(cita => cita.id !== id);
    // Actualizar cita
    this.setState({
      citas
    });
  }
  render() { 
    return ( 
      <div className="container">
        <Header 
          titulo = 'administrador pacientes veterinaria'
        />
        <div className="row">
          <div className="col-md-10 mx-auto">
            <NuevaCita 
              crearNuevaCita = {this.crearNuevaCita}
            />
          </div>
          <div className="mt-5 col-md-10 mx-auto">
            <ListaCitas 
              citas = {this.state.citas}
              eliminarCita = {this.eliminarCita}
            />
          </div>
        </div>
      </div>
     );
  }
}
 
export default App;
