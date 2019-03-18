import React, {Component} from 'react';

const Header = (props) =>{
    return(
        <div className="text-center">
            <h2>{props.titulo}</h2>
        </div>
    );
}
export default Header;