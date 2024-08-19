"use client"
import { useUser } from '@clerk/nextjs';
import { CallingState, StreamCall, StreamVideo, StreamVideoClient, useCall, useCallStateHooks, User } from '@stream-io/video-react-sdk';
import { useEffect, useState } from 'react';
import tokenProvider from '../serveraction/stream.action';
import Loader from '../@/components/Loader';


const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY
// set up the user object

export default function StreamVideoProvider({children}:{children:React.ReactNode}) {
    const [videoClient,setVideoCLient] = useState<StreamVideoClient>()
    const { user,isLoaded } = useUser()
    
    useEffect(() => {
        if(!user || !isLoaded)
            return
        if(!apiKey)
            throw new Error("API key is not present")
        const client = new StreamVideoClient({apiKey,user:{
            id:user?.id,
            name:user?.username || user?.id,
            image:user?.imageUrl
        },
        tokenProvider
    })
      setVideoCLient(client)
    },[user,isLoaded])
    if(!videoClient)
        return <Loader/>
    return (
    <StreamVideo client={videoClient}>
      {children}
    </StreamVideo>
  );
}

