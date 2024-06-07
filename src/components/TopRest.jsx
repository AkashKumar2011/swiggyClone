import React, { useState } from 'react'
import { FaArrowLeft , FaArrowRight } from 'react-icons/fa';
import { Cards } from './Cards';
import restData from '../data/restaurantChainsData.json';


export const TopRest = () => {

    const [slider,setSlider] = useState(0);


  return (
    <>
        <div className='max-w-[1200px] mx-auto p-3'>
            <div className='flex justify-between'>
                <div className='text-2xl font-bold ml-7'>
                Top restaurant chains in Lucknow
                </div>
                <div className='flex gap-2 mr-11 text-gray-700 justify-center text-center items-center'>
                    <div  className='w-[40px] h-[40px] bg-[#f0f0f9] hover:bg-slate-300 rounded-full flex justify-center items-center'><FaArrowLeft /></div>
                    <div  className='w-[40px] h-[40px] bg-[#f0f0f3] hover:bg-slate-300 rounded-full flex justify-center items-center' ><FaArrowRight /></div>
                </div>
            </div>
            <div className='flex overflow-hidden py-1'>
                {
                    restData.map(
                        (data,index) => {
                            return(
                                <Cards {...data} key={index} />
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
