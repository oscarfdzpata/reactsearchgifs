import React, { useState, useEffect, Fragment } from 'react'
import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GiftGrid = ( {category} ) => {

    const [images, setImages] = useState([ ])
    //Este useEfet solo se ejecutara la primera vez porque el array lo dejo vacio, mas tarde le meto argumento por la dependerncia
    useEffect( () => {
        getGifs(category)
            .then( imgs => setImages(imgs))
    }, [category] )
    

    //setImages(getGifs(category));
    //getGifs();
    return (
        <Fragment>
            <h3>{category}</h3>
            <div className="card-grid">
                
    
                {
                //images.map( ({ id, title })  => (  //Con destructuring
                images.map( image   => (  //Sin destructutirig

                    // <li key={ id }> { title }</li>
                    <GifGridItem
                    key={ image.id }
                    {...image} 
                    />
                ))
                }

            </div>
        </Fragment>
    )
}
