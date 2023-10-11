import React from 'react'

function RightLogin() {
  return (
    <div className='w-full lg:flex-1 sansFont my-16 lg:my-0 justify-center items-center h-fit'>
      <div className='flex flex-col bg-white gap-4 w-full lg:w-4/5 justify-center items-center py-9'>

      <div className='text-4xl font-bold text-textBlue mb-3'>Sign Up Now</div>
      <input type="text" placeholder='Your email' className='border rounded-3xl px-5 py-1 w-2/3 border-greyLine'/>
      <input type="password"  placeholder='Your password' className='border rounded-3xl px-5 py-1 w-2/3 border-greyLine'/>
      <div className='flex gap-3'> <input type='checkbox' /><div className='text-grey'>I agree to the Terms of Service.</div> </div>
      <button className='cursor-pointer w-2/3 bg-bgBlue rounded-3xl p-1 text-white font-medium'>Sign In</button>
      <div className='flex w-full items-center justify-center gap-4'><hr className= 'border-t h-1 w-4/12 text-greyLine'/> <span>or</span> <hr className= 'border-t h-1 w-4/12 text-greyLine'/></div>
      <button className='cursor-pointer w-2/3 bg-bgBlueL rounded-3xl p-1 text-white font-medium'> Login via Twitter</button>
      <div className='flex gap-3 text-grey'><div>Do you have an Account?</div><a href="/" className='text-colorSky'>Sign In</a> </div>

      </div>
    </div>
  )
}

export default RightLogin