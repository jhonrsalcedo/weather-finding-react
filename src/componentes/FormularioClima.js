import React, {Component} from 'react';

export default class FormularioClima extends Component{
 constructor(props){
     super(props);
         this.state= {
            // error:false,
            ciudadValue:'',
            paisValue:''
         }
 }

    HandlebuscarClima = (e) =>{
        e.preventDefault();

       const datosClimaForm = this.state 
        // console.log(respuestaClima);

      // se envia el objeto hacia el padre para que actualizar el state
      this.props.datosClima(datosClimaForm);
      

      //reinicar formulario
      this.setState({
        ciudadValue:'',
        paisValue:''
      })
        
    }

    HandleClimaInput = (e) =>{
        this.setState({
          [e.target.name]: e.target.value
        })
    }
    render(){
        return(
            <div className="container">
              <form onSubmit={this.HandlebuscarClima}>
            <div className="row">
          
            <div className="col-6 col-md-4">
            <label htmlFor="ciudad">Ciudad:</label>
    <input type="text" className="form-control" id="ciudad" placeholder="Digite la Ciudad" name="ciudadValue" onChange={this.HandleClimaInput} value={this.state.ciudadValue}/>
            
            </div>
            <div className="col-6 col-md-4">
            <label htmlFor="pais">Pais:</label>
            <select className="form-control" name="paisValue" onChange={this.HandleClimaInput} value={this.state.paisValue}>
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