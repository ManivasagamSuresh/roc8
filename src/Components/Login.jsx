import React from 'react'
import LeftLogin from './LeftLogin'
import RightLogin from './RightLogin'

function Login() {
  return (
    <div className='flex flex-col lg:flex-row justify-between items-center flex-1 mt-7 md:mt-0'>
        <LeftLogin/>
        <RightLogin/>
    </div>
  )
}

export default Login