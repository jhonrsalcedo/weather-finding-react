import React, {Component} from 'react';

class Weather extends Component{
    render(){

        console.log(this.props.responseWeather);
        return(
            <div className="container">
            <div className="row">
            <div className="col-lg-12 col-md-6 offset-md-1 mt-3">
                <div className="text-center">
                    desde Component Weather
                </div>
            
            </div>
            </div>
        </div>
        );
    }
}

export default Weather;