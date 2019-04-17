import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) =>{
    return(
        <div className="text-center col mt-3 mb-3">
            <h2>{props.title}</h2>
        </div>
    );
}
Header.propTypes ={
    title: PropTypes.string.isRequired
}
export default Header;