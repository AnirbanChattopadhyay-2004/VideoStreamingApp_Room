"use client"
import React from 'react'
import { Navbar } from '../../../@/components/navbar';
import { Sidebar } from '../../../@/components/sidebar';
import { useUser } from '@clerk/nextjs';
const HomeLayout = ({
    children,
  }:{
    children: React.ReactNode;
  }) => {
    const { isLoaded, isSignedIn, user } = useUser()
    console.log(user)
  return ( 
    <main className='relative'>
      <Navbar/>
      
      <div className='flex'>
      <Sidebar/>
      <section className='flex  min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-14'>
        <div className='w-full'>

          {children}

        </div>
      </section>
      </div>
      
    </main>
  )
}

export default HomeLayout