import React from 'react'

function NavbarMob({prop}) {
  return (
    <div className='w-full   my-2 py-8 text-white bg-white bg-opacity-25'>
        <div className='absolute top-4 right-4 text-2xl font-medium cursor-pointer' onClick={()=>{prop(false)}}>X</div>
     <ul className= 'flex flex-col gap-6 text-lg items-center justify-center '>
        <li className='opacity-25 cursor-pointer'>Overview</li>
        <li className='cursor-pointer'>Prices</li>
        <li className='cursor-pointer'>Blog</li>
        <li className='cursor-pointer'>Feedback</li>
        <li className='cursor-pointer'><button className='bg-bgPink px-4 py-1 rounded-3xl'> Purchase </button></li>
      </ul>
    </div>
  )
}

export default NavbarMob