import React from 'react';

//station 
const Error = (props) => {
    return(
        <div className="container">
            <div className="row">
            <div className="col-lg-12 col-md-6 offset-md-1 mt-3">
                <div className="alert alert-danger text-center w-75">
                    {props.mensaje}
                </div>
            
            </div>
            </div>
        </div>
    );
}

export default Error;