import React, { useState } from 'react'

import PropTypes from 'prop-types';  // Que el parametro que le llega al componente sea obligatorio


// export const AddCategory = ( props ) => {  //Funciona igual sin destructiring
export const AddCategory = ( {setCategories} ) => { //Con destructuring el parametro que le llega desde gifexpertApp

    const handleChangeInput = (e) => {

        console.log(e.target.value);
        //console.log(e);
        setInputValue( e.target.value )
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log('Submit realizado');
        // props.setCategories( cats => [...cats, inputValue] );  //Sin destructiring
        if (inputValue.trim().length > 2 ){
            setCategories( cats => [inputValue,...cats ]);  //Con destructorung
            setInputValue('');
        }

    }
    
    const [inputValue, setInputValue] = useState('')

    return (
        <form onSubmit={ handleSubmit }>                    
            <input 
                type="text" 
                value= { inputValue }
                onChange= { handleChangeInput }
            />                
            <button onClick={ handleSubmit }>Añadir</button>
            <hr/>
        </form>
    )
}

//Que el parametro {setCategories} que necesita el componente AddCategoriy sea obligatorio, la llamada al componente es desde GifExpertApp
// el nombre {setCategories} lo he puesto yo en, export const AddCategory = ( {setCategories} ), si en la llamada al componente no lo 
// ponemos nos saltara error en la consola, <AddCategory setCategories = { setCategories }/>
AddCategory.propTypes  = {
    setCategories: PropTypes.func.isRequired
}
 