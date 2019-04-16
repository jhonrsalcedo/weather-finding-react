import React, {Component} from 'react';

class Weather extends Component{

    showResult = () =>{
        // obtener los datos de la consulta y extraerlos por medio de desructuring
        const {name, weather, main} = this.props.responseWeather;
        
        if(!name || !weather || !main) return null;
        return(
            <h1>Desde Component Weather</h1>
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

export default Weather;