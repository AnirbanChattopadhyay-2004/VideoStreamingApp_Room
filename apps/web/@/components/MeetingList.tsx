import React from 'react'
import Image from 'next/image'
type proptype={
    img:string,
    className:string,
    title?:string,
    description?:string,
    handleclick:() => void
}
const MeetingList = ({img,className,title,description,handleclick}:proptype) => {
  return (
    <div className={`h-[264px] rounded-lg flex flex-col p-5 justify-between cursor-pointer ${className} `} onClick={handleclick}>
        
        <Image 
        src={img}
        height={27}
        width={27}
        alt="Image" 
        className='glassmorphism rounded-md'/>
        <div>
            <h1 className='text-white font-semibold text-lg'>{title}</h1>
            <p className='text-gray-300'>{description}</p>
        </div>
    </div>
  )
}

export default MeetingList