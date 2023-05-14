import { useStateContext } from '@/context/StateContext'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'

const Layout = ({ children }) => {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  const [date, setDate] = useState(27)
  const [month, setMonth] = useState('')
  const [time, setTime] = useState('')

  
  const changeTime = () => {
    setDate(new Date().getDate())
    setMonth(months[new Date().getMonth()])

    let minute = new Date().getMinutes()
    if (minute < 10)
      minute = "0" + minute

    let hour = new Date().getHours()
    if (hour < 10)
      hour = "0" + hour

    setTime(`${hour}:${minute}`)

  }
  setInterval(changeTime, 1000)

  return (
    <div className=' px-4 md:px-8 bg-gradient-to-r from-teal-900 to-sky-950 min-h-screen w-full flex flex-col items-center'>
        <div className='mt-12 w-full flex justify-between'>
          <Link href='/'>
            <Image className=' h-8 md:h-12 w-auto' src='/daylong-logo-white.png' height={200} width={300} alt="" />
          </Link>
          <div className=' p-4 rounded-md bg-opacity-50 flex flex-col items-center bg-slate-950'>
            <h2 className=' text-5xl md:text-7xl text-slate-400 font-semibold'>{date}</h2>
            <h3 className=' text-2xl md:text-3xl text-slate-400 font-semibold'>{month}</h3>
            <h3 className=' text-2xl text-slate-400'>{time}</h3>
          </div>
        </div>
        {children}
    </div>
  )
}

export default Layout