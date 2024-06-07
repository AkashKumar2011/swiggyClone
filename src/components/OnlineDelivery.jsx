import { Cards } from './Cards';
import restData from '../data/restaurantChainsData.json';
import React, { useRef, useEffect, useState } from 'react';
import filterData from '../data/categoryData.json';

export const OnlineDelivery = () => {
    const myRef = useRef(null);
    const [isAtTop, setIsAtTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        if (myRef.current) {
            const { top } = myRef.current.getBoundingClientRect();
            setIsAtTop(top <= 0); // Check if component is at the top
        }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

  return (
    <>
        <div className='max-w-[1200px] mx-auto p-3' ref={myRef}>
            <div className=''>
                <div className='text-2xl font-bold ml-7'>
                    Restaurants with online food delivery in Lucknow
                </div>
                <div className={isAtTop ? 'fixed top-0 z-[999999] bg-white w-[1200px]' : ''}>
                    <div className='max-w-[1200px] text-stone-600 font-semibold mx-auto flex text-center justify-center items-center my-4 gap-3'>
                       <div className='py-2 px-5 rounded-full shadow'>Filter</div>
                       <div className='py-2 px-5 rounded-full shadow'>Short-By</div>
                       <div className='py-2 px-5 rounded-full shadow'>Fast Delivery</div>
                       <div className='py-2 px-5 rounded-full shadow'>New a swiggy</div>
                       <div className='py-2 px-5 rounded-full shadow'>Rating 4.0+</div>
                       <div className='py-2 px-5 rounded-full shadow'>Pure Veg</div>
                       <div className='py-2 px-5 rounded-full shadow'>Offers</div>
                       <div className='py-2 px-5 rounded-full shadow'>Less Then Rs. 300</div>
                       {/* <div className='py-2 px-5 rounded-full shadow'>Rs. 300 - Rs. 600</div> */}
                    </div>
                </div>
            </div>
            <div className='md:grid grid-cols-4 gap-3 py-2'>
                {
                    restData.map(
                        (data,index) => {
                            return(
                               <>
                               <Cards {...data} key={index} />
                               </>
                            )
                        }
                    )
                }
                {
                    restData.map(
                        (data,index) => {
                            return(
                               <>
                               <Cards {...data} key={index} />
                               </>
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
