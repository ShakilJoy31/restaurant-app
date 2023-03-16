import React from 'react';
import FoodProductStyle from './FoodProductStyle.module.css';

const Spinner = () => {
    return (
        <div className='flex justify-center my-4'>
            <div class={`${FoodProductStyle.spinner}`}></div>
        </div>
    );
};

export default Spinner;