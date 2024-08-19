"use server"

import { currentUser } from "@clerk/nextjs/server"
import { StreamClient } from "@stream-io/node-sdk"

const API_KEY=process.env.NEXT_PUBLIC_STREAM_API_KEY
const SECRET_KEY=process.env.STREAM_SECRET_KEY

// creation of token
const tokenProvider = async ()=>{
    const  user = await currentUser()
    if(!user)
        throw new Error("User not logged in")
    if(!API_KEY)
        throw new Error("No API key")
    if(!SECRET_KEY)
        throw new Error("No secret key")
    const client = new StreamClient(API_KEY,SECRET_KEY)
    const exp = Math.round(new Date().getTime() / 1000) + 60 * 60;
    const issued = Math.floor(Date.now()/1000)-60
    const token = client.createToken(user.id,exp,issued)
    return token
} 
export default tokenProvider
