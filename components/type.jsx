import React, { useState, useEffect } from 'react'
import Main from './main'
import Sub from './sub'
import Task from './task'


const Type = ({ name, type, time, email }) => {
  const [main, setMain] = useState(true)
  const [mainID, setMainID] = useState('')
  const [subID, setSubID] = useState('')
  const [sub, setSub] = useState(false)
  const [task, setTask] = useState(false)

  const handleMain = () => {
    setMain(true)
    setSub(false)
    setTask(false)
  }

  const handleSub = (id = '') => {
    setSub(true)
    setTask(false)
    setMain(false)

    if (id !== '') {
      console.log(id)
      setMainID(id)
    }
  }

  const handleTask = (id = '') => {
    setTask(true)
    setSub(false)
    setMain(false)

    if (id !== '') {
      console.log(id);
      setSubID(id)
    }
  }

  return (
    <div className=' border border-slate-400 rounded-md mb-12'>
        <div onClick={handleMain} className=' cursor-pointer flex flex-col justify-center items-center bg-slate-950 bg-opacity-30 rounded-md py-4'>
          <h2 className='text-slate-300 font-semibold text-xl'>{name}</h2>
          <h2 className='text-slate-400'>{time}</h2>
        </div>

        {main && <Main handleSub={handleSub} type={type} email={email} />}
        {sub && <Sub handleMain={handleMain} type={type} email={email} main={mainID} handleTask={handleTask} />}
        {task && <Task handleSub={handleSub} type={type} email={email} sub={subID} main={mainID} handleMain={handleMain} />}
    
    </div>
  )
}

export default Type