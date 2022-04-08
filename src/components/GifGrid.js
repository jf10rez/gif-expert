import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import { getGifs } from '../helpers/getGifs'
import GifGridItem from './GifGridItem'

const GifGrid = ( {category} ) => {

    const {data:images, loading} = useFetchGifs(category)
  return (
      <>
      <h3>{category}</h3>

      { loading && <p className="animate__animated animate__flash">Cargando...</p>}
        <div className='card-grid'>
                {
                    images.map( img => (
                    <GifGridItem key={img.id} img={img} />
                    ))
                }
        </div>
      </>
  )
}

export default GifGrid