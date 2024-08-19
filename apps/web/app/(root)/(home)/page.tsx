"use client"
import React, { useState } from 'react'
import MeetingList from '../../../@/components/MeetingList'
import { useRouter } from 'next/navigation'
import MeetingModal from '../../../@/components/MeetingModal'
import { useStreamVideoClient } from '@stream-io/video-react-sdk'

const Home = () => {
  
  const dateobj = new Date()
  const time=dateobj.toLocaleTimeString('en-US',{hour:'2-digit',minute:'2-digit'})
  const date = new Intl.DateTimeFormat('en-US',{dateStyle:'full'}).format(dateobj)
  const [meetingstate,setMeetingstate] = useState<"isnewmeeting" | "isschedulemeeting" | "isinstantmeeting "| undefined>(undefined);
  const router = useRouter()
  const [values,setValues] = useState({
    dateTime : new Date(),
    description:'',
    link:''
  })
  
  async function createMeeting(){
    const client = useStreamVideoClient()
    try{

    }
    catch(error){

    }
  }

  return (
    <section className="rounded-lg flex flex-col gap-6 size-full">
      <div className="h-[260px] bg-hero bg-cover p-5 rounded-md flex flex-col justify-between">
        <p className='glassmorphism  rounded-md flex items-center justify-center  text-base h-[32px] text-white w-[260px] '>Upcoming meeting at 12:30 Pm</p>
        <div className='flex flex-col gap-1'>
        <h2 className='text-white text-6xl font-extrabold'>{time}</h2>
        <p className='text-base text-gray-300'>{date}</p>
      </div>

      </div>
      <div>
        
      </div>
      <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 '>
        <MeetingList img={"/icons/add-meeting.svg"} className='bg-orange-500' title="New Meeting" description='Start an instant meeting' handleclick={() => {setMeetingstate("isnewmeeting")}} />
        <MeetingList img={"/icons/schedule.svg"} className='bg-blue-500' title="Schedule Meeting" description='Plan your meeting' handleclick={() => {setMeetingstate("isschedulemeeting")}} />
        <MeetingList img={"/icons/recordings.svg"} className='bg-violet-700' title="View Recordings" description='Check out your recordings' handleclick={() => {router.push("/recordings")}} />
        <MeetingList img={"/icons/join-meeting.svg"} className='bg-yellow-500' title="Join new Meeting" description='Via invitation link' handleclick={() => {setMeetingstate("isinstantmeeting ")}} />
        <MeetingModal isopen={meetingstate === "isnewmeeting"} onclose={()=>{setMeetingstate(undefined)}} title='Start an Instant Meeting' buttonText='Start Meeting' handleclick={createMeeting}/>
      </div>
    </section>
  )
}

export default Home