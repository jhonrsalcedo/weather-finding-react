import React, { Component } from 'react';
import Header from './componentes/Header';
import Formweather from './componentes/Formweather';
import Error from './componentes/Error';
import Weather from './componentes/Weather';
class App extends Component {
 constructor(props){
   super(props);
   this.state={
    error: '',
    query: {},
    response: {}
  }
 }

//metodo para revisar state
 componentDidUpdate(prevProps, prevState ){
  //  console.log('Props');
  //  console.log(prevProps);
  //  console.log('State');
  //  console.log(prevState);
  /*eslint-disable eqeqeq*/
  if( prevState.query !== this.state.query){
    this.queryApi();
  }
   
 }

  componentDidMount(){
    this.setState({
      error: false
    })
  }
  // componente para realizar consulata a la api
  queryApi = () => {
    const {cityValue, countryValue} = this.state.query
    if (!cityValue || !countryValue) return null;

    //leer la url y agregar el API key

    const appId = 'b1d1765a63a403729668285a50565b45';
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityValue},${countryValue}&appid=${appId}`;

    //console.log(url)

    //consultar con fetch api
    fetch(url)
      .then(response =>{
        return response.json();
      })
      .then(data =>{
        //console.log(data)
        // lo pasamos al state
        this.setState({
          response: data
        })
      })
      //en caso de error lo podriamos finalizar con un catch
      .catch(error =>{
        console.log(error)
      })

  }
  //creamos un metodo para recibir el objeto del FormularioClima
  methodDataWeather = dataReceivedWeather =>{

    if(dataReceivedWeather.cityValue === '' || dataReceivedWeather.countryValue === ''){
      this.setState({
        error: true
      })
    }else{
      this.setState({
        query: dataReceivedWeather,
        error: false
      })
    }
     
  }
  render() {
    const error = this.state.error;
      let result; 
      if (error) {
        result = <Error mensaje="Ambos campos son obligatorios"/>
      } else{
        result = <Weather responseWeather = {this.state.response} />
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
