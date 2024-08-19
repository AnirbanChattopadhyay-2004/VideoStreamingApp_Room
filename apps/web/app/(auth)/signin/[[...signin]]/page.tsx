import { SignIn } from '@clerk/nextjs'
import React from 'react'

const signin = () => {
  return (
    
    <div className='flex h-[100vh] w-full items-center justify-center'>
        <SignIn/>
    </div>
  )
}

export default signin