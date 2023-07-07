import { Inter } from 'next/font/google'
import React, { useState, useEffect } from 'react'
import { fetchMyData } from '@/fetch/fetchMyData'
import Type from '@/components/type'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const email = 'colwanymab@gmail.com'
  const [type, setType] = useState([])

  useEffect(() => {
    getTypes()
  }, [])

  const getTypes = async () => {
    const { status, data } = await fetchMyData(`/api/v1/type`, {})
    if (status == 200) 
      setType(data)
  }

  return (
    <div className=' mt-8 md:px-8 w-full grid grid-cols-1 md:grid-cols-2 gap-8'>
      {
        type?.map(({_id, name, time}) => (
          <Type key={_id} type={_id} name={name} time={time} email={email} />
        ))
      }
    </div>
  )
}
