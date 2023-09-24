import React from 'react';
import PropTypes from 'prop-types'; 
import Feature from '../feature/Feature';

const PriceOption = ({add}) => {
    const{name,price,features}=add;
    return (
        <div className=' bg-red-500 rounded-lg p-7 text-xl flex-col flex'>
           
           <h2 className='text-center'>
            <span className='text-white text-7xl'>{price}</span>
            
            <span className='text-2xl'>/mon</span>
           </h2>
           <h4 className='text-4xl text-center my-9'>{name}</h4>

          <div className='flex-grow'>
          {
                features.map(adde=> <Feature  adde={adde}></Feature>)
           }
          </div>
           <div>
            <button className='bg-orange-300 w-full mt-12'>Bye now</button>
           </div>
        </div>
    );
};


PriceOption.PropTypes={
    add : PropTypes.object
}

export default PriceOption;