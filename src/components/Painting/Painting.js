import React from 'react'

function Painting({data}) {
    
    let objectLength = Object.keys(data).length
    
    let array=[];
    for(let i=1; i<objectLength; i++){
        array = [...array, i];
    }
    
  return (
    <div>
        {array.map(e => {
            console.log(objectLength)
            return <img className='galleryPainting' src={`${data[e]}`}  alt={`${data[e]}`} />
        })}
    </div>
  )
}

export default Painting