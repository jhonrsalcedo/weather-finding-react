import React, {Component} from 'react';
import PropTypes from 'prop-types';


class Weather extends Component{

    showResult = () =>{
        // obtener los datos de la consulta y extraerlos por medio de desructuring
        const {name, weather, main} = this.props.responseWeather;
        
        if(!name || !weather || !main) return null;

        const kelvin = 273.15;

        const urlIcono = `http://openweathermap.org/img/w/${weather[0].icon}.png`;
        const alt = `clima de ${name}`;
        return(
            <div className="alert alert-info col-md-8 ">
                <h3>Resultado Clima de: {name}</h3>
                <p>Actual {(main.temp - kelvin).toFixed(2) } &deg;C <img src={urlIcono} alt={alt} /></p>
                <p>Max: {(main.temp_max - kelvin).toFixed(2) } &deg;C</p>
                <p>Min: {(main.temp_min - kelvin).toFixed(2) } &deg;C</p>
            </div>
        )
    }
    render(){
        // console.log(this.props.responseWeather);
        return(
            <div className="container">
            <div className="row">
            <div className="col-lg-12 col-md-6 offset-md-1 mt-3">
                <div className="text-center">
                   {this.showResult() }
                </div>
            
            </div>
            </div>
        </div>
        );
    }
}
Weather.propTypes ={
    responseWeather: PropTypes.object.isRequired
}
export default Weather;