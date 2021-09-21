import React, {  Fragment } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GiftGrid = ( {category} ) => {

    // const [images, setImages] = useState([ ])
    const { data, loading} = useFetchGifs(category);
    console.log(data);
    console.log(loading);


    

    //setImages(getGifs(category));
    //getGifs();
    return (
        <Fragment>
            <h3>{category}</h3>
            { loading && <p className="animate__animated animate__flash">Loading...</p>}
            <div className="card-grid">
                
    
                {
                //images.map( ({ id, title })  => (  //Con destructuring
                data.map( image   => (  //Sin destructutirig

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
