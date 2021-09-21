import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GiftGrid } from './components/GiftGrid';

export const GifExpertApp = () => {

    //const categories = ['One Punch','Smaurai X', 'Dragon Ball']
    const [categories, setCategories] = useState(['One Punch'])

    // const handleAdd = () =>{
        // setCategories( [ 'ExpedienteX',...categories]);
        //setCategories( cats => ['Expedientex',...cats] );  //Es igual que la de arriba, cats es el array con el valor actual y le devolvemos el valor nuevo, usamos el callback esta vez que recibe por parametro
    // }
    return (
        <>
            <h2>GifExpertApp</h2>            
            <hr/>
            <AddCategory setCategories = { setCategories }/>

            <ol>
               { 
                    // categories.map( (category, i) => {
                    //      return  <li key={ category }> { category} </li>;                          
                    // })

                    categories.map( (category, i) => (
                        <GiftGrid 
                        key= { category}
                        category={ category}
                         />
                    ))

               } 
            </ol>

        </>
    )
}
