import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {
    const [inputValue, setinputValue] = useState("");
    
    const handleInputChange = (e) => {
        setinputValue(e.target.value)
    };
    const handleSubmit = (e) =>{
        e.preventDefault();
        //setCategories will use the callback function to access the array elements since this component cant do that
        if (inputValue.trim().length > 2){
            setCategories( categories => [inputValue, ...categories]);
            setinputValue('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                className='animate__animated animate__fadeInDown animate__delay-1s'
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder='Input new value'
            />
        </form>
    );
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
};
    