export const getGifs = async ( category) => {
    const API_KEY =  'jmhwNA5EszXBjSUWhADWrXjWp6LrRd1X'
    //const URL = 'https://api.giphy.com/v1/gifs/search?limit=10&q=rick&api_key=jmhwNA5EszXBjSUWhADWrXjWp6LrRd1X'
    const URL = `https://api.giphy.com/v1/gifs/search?limit=10&q=${ encodeURI(category)}&api_key=jmhwNA5EszXBjSUWhADWrXjWp6LrRd1X`  //EncodeURi elimina espacios y caracteres extraños

    const respuesta = await fetch(URL)
    const { data } = await respuesta.json();



    const gifs = data.map(img => {
        return { 
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
            //La interrogacion es para decir que si en images hay imagenes usa lo siguiente de la sentencia
        }
    })

    console.log(gifs)
    //setImages(gifs)
    return gifs

}