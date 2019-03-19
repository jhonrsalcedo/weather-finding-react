import React, { Component } from 'react';
import Header from './componentes/Header';

class App extends Component {
  render() {
    return (
     <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-12">
          <div className="mt-3 alert alert-dismissible alert-info">
          <Header 
          titulo={"Clima Api React "}
          />
          </div>
          </div>
        </div>
     </div>
    );
  }
}

export default App;
