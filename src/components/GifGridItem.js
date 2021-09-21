import React from 'react'

export const GifGridItem = ( { id, title, url} ) => {
    console.log(url)
    return (
        <div className="card  animate__animated animate__bounce ">
            {/* {img.title} */}
            <img src={url} alt={title} />
            {/* <p> {title}</p> */}
        </div>
    )
}
