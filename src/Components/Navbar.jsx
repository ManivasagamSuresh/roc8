import React, { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai';
import NavbarMob from './NavbarMob';


function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    < div>
    <div className='md:hidden '>

      
      {
        open ? <NavbarMob prop={setOpen}/> : 
        <div className='absolute right-8 top-8 text-bgPink font-extrabold cursor-pointer'>
        <AiOutlineMenu size="32px" onClick={()=>{setOpen(!open)}}/>
        </div>
      }
  
    </div>
    <div className='hidden md:flex justify-between items-center h-12  text-white sansFont '>
      <div className='text-2xl cursor-pointer' >Startup 3</div>
      <ul className='flex gap-6 text-lg items-center '>
        <li className='opacity-25 cursor-pointer'>Overview</li>
        <li className='cursor-pointer'>Prices</li>
        <li className='cursor-pointer'>Blog</li>
        <li className='cursor-pointer'>Feedback</li>
        <li className='cursor-pointer'><button className='bg-bgPink px-4 py-1 rounded-3xl'> Purchase </button></li>
      </ul>
    </div>
    </div>
  )
}

export default Navbar