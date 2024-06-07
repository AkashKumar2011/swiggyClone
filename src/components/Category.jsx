import React, { useState } from 'react'
import { FaArrowLeft , FaArrowRight } from 'react-icons/fa';
import categoryData from '../data/categoryData.json';

export const Category = () => {
    const [slide,setSlide] = useState(0);

    function nextSlide(){
       setSlide(slide+4);
    }

    function prevSlide(){
        setSlide(slide-4);
    }

  return (
    <>
        <div className='max-w-[1200px] mx-auto p-3'>
            <div className='flex justify-between'>
                <div className='text-2xl font-bold ml-7'>
                    What's on your mind?
                </div>
                <div className='flex gap-2 mr-11 text-gray-700 justify-center text-center items-center'>
                    <div onClick={prevSlide} className='w-[40px] h-[40px] bg-[#f0f0f9] hover:bg-slate-300 rounded-full flex justify-center items-center'><FaArrowLeft /></div>
                    <div onClick={nextSlide} className='w-[40px] h-[40px] bg-[#f0f0f3] hover:bg-slate-300 rounded-full flex justify-center items-center' ><FaArrowRight /></div>
                </div>
            </div>
            <div className='w-full flex overflow-hidden gap-3 p-3 '>
                {
                   categoryData.map(
                        (data,index) => {
                            return(
                                <div className='w-[150px] shrink-0 duration-700' key={index} 
                                     style={{ transform: `translateX(-${slide * 100}px)` }}>
                                    <img src={`images/${data.image}`} alt='Image Not Found' />
                                </div>
                            )
                        }
                   )
                }
            </div>
            <hr className='my-4 border-[2px]' />
        </div>
    </>  
 )
}
