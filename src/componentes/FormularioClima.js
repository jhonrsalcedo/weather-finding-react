import React, {Component} from 'react';

export default class FormularioClima extends Component{
    
    HandlebuscarClima = (e) =>{
        e.defaultValue();
        console.log("respuesta");
    }
    render(){
        return(
            <div className="container">
              <form onSubmit={this.buscarClima}>
            <div className="row">
          
            <div className="col-6 col-md-4">
            <label htmlFor="ciudad">Ciudad:</label>
    <input type="text" className="form-control" id="ciudad" placeholder="Digite la Ciudad"/>
            
            </div>
            <div className="col-6 col-md-4">
            <label htmlFor="pais">Pais:</label>
            <select className="form-control">
      <option value="" defaultValue>Elige un pais</option>
      <option value="AR">Argentina</option>
      <option value="CO">Colombia</option>
      <option value="CR">Costa Rica</option>
      <option value="ES">Espania</option>
      <option value="US">Estados Unidos</option>
      <option value="MX">Mexico</option>
      <option value="PE">Peru</option>
     
    </select>
            </div>
            <div className="col-6 col-md-4 pt-4"><button type="submit" className="btn btn-primary">Buscar...</button></div>
           
          </div>
          </form>
            </div>
        );
    }
}