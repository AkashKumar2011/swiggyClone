import React, { useState } from 'react';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FiSearch } from 'react-icons/fi';
import { AiOutlineUser } from 'react-icons/ai';
import { PiCardsThreeBold  } from "react-icons/pi";
import { BiSolidOffer } from "react-icons/bi";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { BsCreditCard2Back  } from "react-icons/bs";

export const Header = () => {

  const navItems = [
    {
      icons : <PiCardsThreeBold />,
      name : "Swiggy Corporate"
    },
    {
      icons: <FiSearch />,
      name: "Searh"
    },
    {
      icons: <BiSolidOffer />,
      name: "Offers",
      sup: "New"
    },
    {
      icons: <IoHelpBuoyOutline />,
      name: "Help"
    },
    {
      icons: <AiOutlineUser />,
      name: " Sign In"
    },
    {
      icons : <BsCreditCard2Back />,
      name : "Card",
      sup: ''
    }
  ];

  const [toggle,setToggle] = useState(false);

  const showSideMenu = () => { setToggle(true);  }
  const hideSideMenu = () => { setToggle(false); }

  return (
   <>
    <div 
      className='black-overlay h-full w-full fixed duration-500 cursor-pointer' 
      style={{
        opacity: toggle ? 1 : 0 ,
        visibility: toggle ? "visible" : "hidden"
      }}
      onClick={hideSideMenu}
    >
      <div className='w-[500px] h-full bg-white absolute duration-300'
           style={{ left : toggle ? "0%" : "-100%" }}
           onClick={(e) => {e.stopPropagation();} }>
      </div>
    </div>

    <header className='p-[15px] bg-white shadow-xl top-0 sticky z-[9999]'>
        <div className='max-w-[1200px] mx-auto flex justify-between'>
          <div className='flex w-[300px]'>
            <div className='w-[65px]'>
                <img className='w-[65px]' src='/images/swiggy_logo.png' alt='Image Not Found'/>
            </div>      
            <div className='flex bg-white justify-center items-center mx-7'>
                <buton onClick={showSideMenu} className='flex bg-white'>
                  <span className='border-b-2 pb-1 border-gray-700 text-gray-700 font-bold hover:text-[#fc8019] hover:border-[#fc8019]'> Other </span>
                   <MdOutlineKeyboardArrowDown className='text-orange-500 text-2xl mx-3'/>
                </buton>
            </div>
          </div>
            <nav className=' flex w-[900px]'>
              <ul className='flex w-full list-none justify-center items-center gap-x-7'> 
                {
                  navItems.map(
                    (items,index) => {
                      return (
                        <li key={index} className='flex mx-1 gap-1 text-gray-700 cursor-pointer hover:text-[#fc8019] tracking-[1  px] text-[16px] font-semibold '>
                          <span className='m-[4px]'> {items.icons} </span>
                          <span> {items.name} 
                            {/* <sup className='text-[#fc8019] uppercase text-md font-extrabold'> {items.sup} </sup> */}
                          </span>
                        </li>
                      )
                    }
                  )
                }
              </ul>
            </nav>
        </div>
    </header>
   </>
  );
}
