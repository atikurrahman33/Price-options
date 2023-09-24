import React from 'react';
import PropTypes from 'prop-types'; 
import { AiFillEdit } from "react-icons/ai";

const Feature = ({adde}) => {
    return (
        <div >
            <p className='flex items-center align-center'> <AiFillEdit></AiFillEdit> {adde}</p>
            
        </div>
    );
};

Feature.PropTypes={
    adde : PropTypes.string
}

export default Feature;