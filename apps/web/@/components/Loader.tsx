import React from 'react'
import Image from 'next/image'
const Loader = () => {
  return (
    <div className='h-screen w-full flex-center'>
        <Image 
        src = "/icons/loading-circle.svg"
        height={32}
        width={32}
        alt = "Image"/>
    </div>
  )
}

export default Loader