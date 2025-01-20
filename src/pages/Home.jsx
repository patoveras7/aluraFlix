/* eslint-disable react/prop-types */
import { principalPlace } from '../helpers/helpers';
import Card from '../components/Card';
import Modal from '../components/Modal';
import { useState } from 'react';

const Home = ({argentinaPlaces, brasilPlaces, ukPlaces, setArgentinaPlaces, setBrasilPlaces, setUkPlaces}) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentPlace, setCurrentPlace] = useState(null);
    
    

    const deletePlaceArgentina = (id) => {
        setArgentinaPlaces((prevPlaces) => prevPlaces.filter((place) => place.id !== id));
      };

    const deletePlaceBrasil = (id) => {
        setBrasilPlaces((prevPlaces) => prevPlaces.filter((place) => place.id !== id));
      };

    const deletePlaceUk = (id) => {
        setUkPlaces((prevPlaces) => prevPlaces.filter((place) => place.id !== id));
      };


  const onEdit = (id) => {
    
    const place = [...argentinaPlaces, ...brasilPlaces, ...ukPlaces].find(p => p.id === id);
    setCurrentPlace(place);
    setIsModalOpen(true); 
  };

  const resetModal = () => {
    setCurrentPlace(null); 
    setIsModalOpen(false);
  };


  return (
    <div className='min-h-screen'>

        <header className='relative flex flex-col items-center gap-[40px] xl:gap-[170px] lg:flex-row lg:justify-center'>

            <div className='flex flex-col items-center text-justify gap-[20px] z-10'>
                <h1 className='font-bold mt-[20px] sm:text-[25px] lg:text-white'>ANDORRA</h1>
                <p className='w-[300px] text-white font-bold bg-gray-500 p-[10px] opacity-[70%] sm:text-[19px] lg:w-[600px] lg:mb-[20px]'>Andorra es un pequeño país ubicado en los Pirineos, entre Francia y España, en el suroeste de Europa. Con una superficie de aproximadamente 468 km², es uno de los países más pequeños del mundo, y tiene una población de alrededor de 80,000 habitantes. Su capital es Andorra la Vella, que también es la ciudad más grande. Este país es conocido por sus paisajes montañosos y su atractivo para los turistas, especialmente en invierno, cuando se convierte en un destino popular para el esquí y otras actividades de montaña. Además, Andorra es famosa por ser un paraíso fiscal, lo que significa que tiene políticas fiscales favorables para los residentes y empresas, con impuestos relativamente bajos.</p>
            </div>

            <div className='relative items-center h-[310px] w-[240px] sm:h-[360px] sm:w-[300px] rounded-[7px] overflow-hidden z-10 mb-[20px] lg:mb-0 lg:mt-[50px]'>

                    <img src={principalPlace[0].image} alt="image" className='absolute w-full h-full object-cover' />
  
                    <div className='relative flex flex-col items-center z-20 w-full h-full'>
                        <h1 className='flex justify-center font-bold mt-[20px] bg-red-950 text-white w-full text-center sm:text-[20px]'>{principalPlace[0].name}</h1>
                    </div>
            </div>

            <img src="https://i.pinimg.com/474x/c4/70/7f/c4707f4d4b2472e18d24e00557eefaaa.jpg" alt="ANDORRA" className='absolute w-full h-full object-cover'/>

            
        </header>
        
        
        <main className='flex flex-col items-center gap-[20px] bg-[#b4ceda]'>

            <section className='flex flex-col items-center mt-[20px] gap-[20px]'>

                <h1 className='flex justify-center items-center font-bold text-[20px] text-white bg-red-950 w-[250px] pt-[10px] pb-[10px]'>ARGENTINA</h1>   
                <div className='flex flex-wrap justify-around rounded-[7px] bg-gray-500 lg:min-w-[900px] lg:min-h-[1000px] sm:min-w-[550px] sm:min-h-[650px] min-w-[300px] min-h-[400px] ml-[10px] mr-[10px] sm:ml-[20px] sm:mr-[20px]'>
                {argentinaPlaces?.map((place) =>(
                    <Card key={place.id} id={place.id} name={place.name} image={place.image} city={place.city} deletePlace={deletePlaceArgentina} onEdit={onEdit}/>
                ))}
                </div>   

            </section>

            <section className='flex flex-col items-center gap-[20px]'>

                <h1 className='flex justify-center items-center font-bold text-[20px] text-white bg-red-950 w-[250px] pt-[10px] pb-[10px]'>BRASIL</h1>   
                <div className='flex flex-wrap justify-around rounded-[7px] bg-gray-500 lg:min-w-[900px] lg:min-h-[1000px] sm:min-w-[550px] sm:min-h-[650px] min-w-[300px] min-h-[400px] ml-[10px] mr-[10px] sm:ml-[20px] sm:mr-[20px]'>
                {brasilPlaces?.map((place) =>(
                    <Card key={place.id} id={place.id} name={place.name} image={place.image} city={place.city} deletePlace={deletePlaceBrasil} onEdit={onEdit}/>
                ))}
                </div> 
                
            </section>

            <section className='flex flex-col items-center mb-[20px] gap-[20px]'>

                <h1 className='flex justify-center items-center font-bold text-[20px] text-white bg-red-950 w-[250px] pt-[10px] pb-[10px]'>REINO UNIDO</h1>   
                <div className='flex flex-wrap justify-around rounded-[7px] bg-gray-500 lg:min-w-[900px] lg:min-h-[1000px] sm:min-w-[550px] sm:min-h-[650px] min-w-[300px] min-h-[400px] ml-[10px] mr-[10px] sm:ml-[20px] sm:mr-[20px]'>
                {ukPlaces?.map((place) =>(
                    <Card key={place.id} id={place.id} name={place.name} image={place.image} city={place.city} deletePlace={deletePlaceUk} onEdit={onEdit}/>
                ))}
                </div> 
                
            </section>

        </main>

        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {currentPlace && (
          <form className="flex flex-col justify-center items-center gap-[20px] mt-[35px]">
            <input
              type="text"
              name="city"
              value={currentPlace.city}
              onChange={(e) => setCurrentPlace({ ...currentPlace, city: e.target.value })}
              className="bg-[#b4ceda] w-[300px] h-[40px] rounded-[7px] pl-[10px]"
            />
            <input
              type="text"
              name="image"
              value={currentPlace.image}
              onChange={(e) => setCurrentPlace({ ...currentPlace, image: e.target.value })}
              className="bg-[#b4ceda] w-[300px] h-[40px] rounded-[7px] pl-[10px]"
            />
            <input
              type="text"
              name="video"
              value={currentPlace.video}
              onChange={(e) => setCurrentPlace({ ...currentPlace, video: e.target.value })}
              className="bg-[#b4ceda] w-[300px] h-[40px] rounded-[7px] pl-[10px]"
            />
            <textarea
              name="description"
              value={currentPlace.description}
              onChange={(e) => setCurrentPlace({ ...currentPlace, description: e.target.value })}
              className="bg-[#b4ceda] w-[300px] h-[100px] rounded-[7px] pl-[10px]"
            />
            <button
              type="submit"
              onClick={() => {
                setArgentinaPlaces((prev) =>
                  prev.map((place) =>
                    place.id === currentPlace.id ? { ...place, ...currentPlace } : place
                  )
                );
                setBrasilPlaces((prev) =>
                  prev.map((place) =>
                    place.id === currentPlace.id ? { ...place, ...currentPlace } : place
                  )
                );
                setUkPlaces((prev) =>
                  prev.map((place) =>
                    place.id === currentPlace.id ? { ...place, ...currentPlace } : place
                  )
                );
                 resetModal();
              }}
              className="bg-red-950 text-white pr-[5px] pl-[5px] rounded-[7px] border-solid border-white border-[2px]"
              
            >
              Guardar cambios
            </button>
          </form>
        )}
      </Modal>        


    </div>

  )
}

export default Home