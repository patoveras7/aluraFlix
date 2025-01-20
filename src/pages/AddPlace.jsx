/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const AddPlace = ({setArgentinaPlaces, argentinaPlaces, setBrasilPlaces, brasilPlaces, setUkPlaces, ukPlaces}) => {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({ place: '', city: '', image: '', video: '', description: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPlace = { ...formData, id: uuidv4() };

    if (formData.place === "Argentina"){
      setArgentinaPlaces([...argentinaPlaces, newPlace]);
    } else if (formData.place === "Brasil"){
      setBrasilPlaces([...brasilPlaces, newPlace]);
    } else {
      setUkPlaces([...ukPlaces, newPlace]);
    }

    navigate('/');

  };

  const handleResetForm = () => {
    setFormData({
      place: '',
      city: '',
      image: '',
      video: '',
      description: '',
    });
  };

  return (
    <div className="min-h-screen bg-[#b4ceda] flex flex-col justify-center items-center">
      <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-[20px] lg:text-[25px]">
       
        <select
          name="place"
          value={formData.place}
          onChange={handleChange}
          className="bg-white w-[300px] h-[40px] rounded-[7px] pl-[10px] border lg:w-[500px] lg:h-[60px]"
        >
          <option value="">-- Selecciona un pais --</option>
          <option value="Argentina">Argentina</option>
          <option value="Brasil">Brasil</option>
          <option value="Reino Unido">Reino Unido</option>
        </select>

        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          placeholder=" Ciudad"
          className="bg-white w-[300px] h-[40px] rounded-[7px] pl-[10px] lg:w-[500px] lg:h-[60px]"
        />

        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder=" ImagenUrl"
          className="bg-white w-[300px] h-[40px] rounded-[7px] pl-[10px] lg:w-[500px] lg:h-[60px]"
        />

        <input
          type="text"
          name="video"
          value={formData.video}
          onChange={handleChange}
          placeholder=" VideoUrl"
          className="bg-white w-[300px] h-[40px] rounded-[7px] pl-[10px] lg:w-[500px] lg:h-[60px]"
        />

        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder=" Descripcion"
          className="bg-white w-[300px] h-[100px] rounded-[7px] pl-[10px] lg:w-[500px] lg:h-[250px]"
        />

        <div className='flex gap-[50px] lg:gap-[80px]'>
        <button type="submit" className="bg-red-950 text-white pr-[5px] pl-[5px] rounded-[7px] border-solid border-white border-[2px] lg:text-[25px]">
          Agregar
        </button>
        <button onClick={handleResetForm} type="reset" className="bg-red-950 text-white pr-[5px] pl-[5px] rounded-[7px] border-solid border-white border-[2px] lg:text-[25px]">
          Limpiar
        </button>
        </div>

      </form>
    </div>
  );
};

export default AddPlace;
