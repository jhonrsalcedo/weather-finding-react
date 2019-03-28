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
    return (
     <div className="container">
      <div className="row">
        
          <Header 
          title={"Clima Api React "}
          />
        
          <FormularioClima
          //props dataWeather que viene del formulario
            dataWeather ={this.methodDataWeather}
          />
        </div>
     </div>
    );
  }
}

export default App;
