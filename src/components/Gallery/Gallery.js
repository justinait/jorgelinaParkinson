import React from 'react'
import './Gallery.css'

function Gallery() {
  return (
    <div className='gallery'>
        <p className='serieTitle'>Nombre de la serie</p>
        <div className='galleryContainer'>
            <img className='galleryPainting' src='./carousel/landscape(24).jpg'    alt="" />
            <img className='galleryPainting' src='./carousel/landscape(24).jpg'    alt="" />
            <img className='galleryPainting' src='./carousel/landscape(24).jpg'    alt="" />
            <img className='galleryPainting' src='./carousel/landscape(24).jpg'    alt="" />
            <img className='galleryPainting' src='./carousel/landscape(24).jpg'    alt="" />
            <img className='galleryPainting' src='./carousel/landscape(24).jpg'    alt="" />
            <img className='galleryPainting' src='./carousel/landscape(24).jpg'    alt="" />
            <img className='galleryPainting' src='./carousel/landscape(24).jpg'    alt="" />
        </div>
    </div>
    
  )
}

export default Gallery