import React from 'react';

const Error = (props) => {
    return(
        <div className="container">
            <div className="row">
            <div className="col-lg-12 col-md-6 offiset-md-3">
                <div className="alert alert-danger">
                    {props.mensaje}
                </div>
            
            </div>
            </div>
        </div>
    );
}

export default Error;