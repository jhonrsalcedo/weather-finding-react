import React from 'react';

const Header = (props) =>{
    return(
        <div className="text-center col mt-3 mb-3">
            <h2>{props.title}</h2>
        </div>
    );
}
export default Header;