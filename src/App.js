import React, { Component } from 'react';
import Header from './componentes/Header';
import FormularioClima from './componentes/FormularioClima';
class App extends Component {
  state={

  }

  //creamos un metodo para recibir el objeto del FormularioClima
  metodoDatosClima = datosRecibidoClima =>{
     console.log(datosRecibidoClima);
  }
  render() {
    return (
     <div className="container">
      <div className="row">
        
          <Header 
          titulo={"Clima Api React "}
          />
        
          <FormularioClima
            datosClima ={this.metodoDatosClima}
          />
        </div>
     </div>
    );
  }
}

export default App;
