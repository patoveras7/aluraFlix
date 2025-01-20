/* eslint-disable no-unused-vars */
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

  const navigate = useNavigate();    

  return (
    <div className='flex justify-between items-center bg-red-950 h-[70px]'>
      <div className='font-bold text-white text-[20px] ml-[10px] sm:ml-[30px] lg:ml-[70px]' >
      ALURAFLIX
      </div>
      <div className='flex justify-center items-center gap-[10px] sm:gap-[20px] lg:gap-[40px] mr-[10px] sm:mr-[30px] lg:mr-[70px]'>
      <button onClick={() => navigate('/')} className='text-white text-[15px] pr-[5px] pl-[5px] sm:p-[6px] border-solid border-white border-[2px] hover:bg-white hover:text-red-950 hover:font-bold'>Home</button>
      <button onClick={() => navigate('/add')} className='text-white text-[15px] pr-[5px] pl-[5px] sm:p-[6px] border-solid border-white border-[2px] hover:bg-white hover:text-red-950 hover:font-bold'>Nuevo Lugar</button>
      </div>
    </div>
  )
}

export default Navbar