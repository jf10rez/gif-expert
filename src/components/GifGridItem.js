import React from 'react'

const GifGridItem = ( {img} ) => {

    const {url, title} = img;
  return (
    <div className='card animate__animated animate__fadeInBottomLeft'>
        <img src={url} alt={title}></img>
        <p>{title}</p>
    </div>
  )
}

export default GifGridItem