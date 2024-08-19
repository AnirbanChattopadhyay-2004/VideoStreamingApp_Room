"use client"

import StreamVideoProvider from "../../providers/StreamProvider";

const RootLayout = ({
    children,
  }:{
    children: React.ReactNode;
  }) => {
    
  return ( 
    <StreamVideoProvider>
        {children}
    </StreamVideoProvider>
  )
}

export default RootLayout