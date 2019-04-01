import React, { Component } from 'react';
import Header from './componentes/Header';
import Formweather from './componentes/Formweather';
import Error from './componentes/Error';
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
  methodDataWeather = dataReceivedWeather =>{

    if(dataReceivedWeather.cityValue === '' || dataReceivedWeather.countryValue === ''){
      this.setState({
        error: true
      })
    }else{
      console.log(dataReceivedWeather);
    }
     
  }
  render() {
    const error = this.state.error;
      let result; 
      if (error) {
        result = <Error mensaje="Ambos campos son obligatorios"/>
      }
    return (
     <div className="container">
      <div className="row">
        
          <Header 
          title={"Clima Api React "}
          />
        
          <Formweather
          //props dataWeather que viene del formulario
            dataWeather ={this.methodDataWeather}
          />
          {result}
        </div>
     </div>
    );
  }
}

export default App;
