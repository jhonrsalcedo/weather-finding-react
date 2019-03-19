import React, { Component } from 'react';
import Header from './componentes/Header';
import FormularioClima from './componentes/FormularioClima';
class App extends Component {
  render() {
    return (
     <div className="container">
      <div className="row">
        
          <Header 
          titulo={"Clima Api React "}
          />
        
          <FormularioClima/>
        </div>
     </div>
    );
  }
}

export default App;
