import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";



export const useFetchGifs = ( category ) => {

    const [state, setstate] = useState({
        data:[],
        loading: true
    });
    
    //Este useEfet solo se ejecutara la primera vez porque el array lo dejo vacio, mas tarde le meto argumento por la dependerncia
    useEffect( () => {
        // getGifs(category)
        //     .then( imgs => setImages(imgs))
        getGifs(category)
            .then( imgs =>{

                setTimeout(() => {

                    setstate({
                        data: imgs,
                        loading: false
                    }) 
                    
                }, 1000);


            })
    }, [category] )



    return state;

}
