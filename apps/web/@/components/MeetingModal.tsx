import React, { ReactNode } from 'react'
import {
  Dialog,
  DialogContent} from "./ui/dialog"
import Image from 'next/image'
import { Button } from "./ui/button"

type proptype = {
  isopen:boolean,
  onclose:() => void,
  title?:string,
  className?:string,
  children?:ReactNode,
  handleclick?:() => void,
  buttonText?:string,
  image?:string,
  buttonIcon?:string
}
const MeetingModal = ({isopen,onclose,title,className,children,handleclick,buttonText,image,buttonIcon}:proptype) => {
  return (
      <Dialog open={isopen} onOpenChange={onclose}>
      <DialogContent className='flex flex-col bg-dark-1 max-w-[520px] border-black text-white gap-6 p-5'>
        {image && <div className='flex justify-center'>
          <Image src={image} height = {72} width = {72} alt="Image"/>  
        </div> }
        <h1 className='text-white font-extrabold '>{title}</h1>
        {children}
        <Button variant={'default'} className='max-w-full bg-blue-600 border-blue-500 rounded-md focus-visible:ring focus-visible:ring-offset-0 ' onClick={handleclick}>{buttonText}</Button>
          
      </DialogContent>
    </Dialog>
  
  )
}

export default MeetingModal