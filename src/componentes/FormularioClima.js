import React, {Component} from 'react';

export default class FormularioClima extends Component{
 constructor(props){
     super(props);
         this.state= {
            // error:false,
            cityValue:'',
            countryValue:''
         }
 }

    HandlefindWeather = (e) =>{
        e.preventDefault();

       const weatherForm = this.state 
     //console.log(weatherForm);

      // se envia el objeto por props hacia el padre para que actualizar el state
      this.props.dataWeather(weatherForm);
      

      //reinicar formulario
      this.setState({
        ciudadValue:'',
        paisValue:''
      })
        
    }

    HandleWeatherInput = (e) =>{
        this.setState({
          [e.target.name]: e.target.value
        })
    }
    render(){
        return(
            <div className="container">
              <form onSubmit={this.HandlefindWeather}>
            <div className="row">
          
            <div className="col-6 col-md-4">
            <label htmlFor="city">Ciudad:</label>
    <input type="text" className="form-control" id="city" placeholder="Digite la Ciudad" name="cityValue" onChange={this.HandleWeatherInput} value={this.state.cityValue}/>
            
            </div>
            <div className="col-6 col-md-4">
            <label htmlFor="country">Pais:</label>
            <select className="form-control" id="country" name="countryValue" onChange={this.HandleWeatherInput} value={this.state.countryValue}>
      <option value=""  defaultValue>Elige un pais</option>
      <option value="AR">Argentina</option>
      <option value="CO">Colombia</option>
      <option value="CR">Costa Rica</option>
      <option value="ES">Espania</option>
      <option value="US">Estados Unidos</option>
      <option value="MX">Mexico</option>
      <option value="PE">Peru</option>
     
    </select>
            </div>
            <div className="col-6 col-md-4 pt-4"><input type="submit" className="btn btn-primary btn-block " value="Buscar..."/></div>
           
          </div>
          </form>
            </div>
        );
    }
}