import React, { Component } from 'react';
import Header from './componentes/Header';
import FormularioClima from './componentes/FormularioClima';
class App extends Component {
 constructor(props){
   super(props);
   this.state={
    error: ''
  }
 }

  componentDidMount(){
    this.setState({
      error: false
    })
  }

  //creamos un metodo para recibir el objeto del FormularioClima
  metodoDatosClima = datosRecibidoClima =>{

    if(datosRecibidoClima.ciudadValue === '' || datosRecibidoClima.paisValue === ''){
      this.setState({
        error: true
      })
    }else{
      console.log('todo esta bien');
    }
     
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
