import React from 'react';

const Header = (props) =>{
    return(
        <header className="text-center">
            <h2>{props.titulo}</h2>
        </header>
    );
}
export default Header;