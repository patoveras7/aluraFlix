/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const Card = ({id, name, image, city, deletePlace, onEdit}) => {

  return (

    <div className='relative items-center h-[310px] w-[240px] rounded-[7px] overflow-hidden mt-[16px] mb-[16px]'>

            <img src={image} alt={name} className='absolute w-full h-full object-cover' />

            
            <div className='relative flex flex-col items-center justify-between z-10 h-full w-full'>

                <h1 className='font-bold bg-red-950 text-white w-full text-center mt-[20px]'>{city}</h1>
    
                <div className='flex items-center justify-center gap-[50px] mb-[15px]'>
                    <button onClick={() => onEdit(id)} className='bg-red-950 text-white w-[80px] rounded-[7px] border-solid border-white border-[2px]'> Editar </button>
                    <button onClick={() => deletePlace(id)} className='bg-red-950 text-white w-[80px] rounded-[7px] border-solid border-white border-[2px]'> Eliminar </button>
                </div>

            </div>
          

    </div>
  )
}

export default Card