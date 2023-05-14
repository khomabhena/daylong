import React, { useState } from 'react'
import { BsPlusCircle } from 'react-icons/bs'
import { MdSend } from 'react-icons/md'

const TaskInput = () => {
    const [input, setInput] = useState(false)

    const openTask = (event) => {
        event.preventDefault()
        setInput(prev => !prev)
    }

    const addTask = (event) => {
        event.preventDefault()
        setInput(prev => !prev)
    }

  return (
    <div>
        <form className=' flex mt-4 items-center gap-4'>
            <input className={`${input ? 'block': ' invisible'} ring-1 text-slate-300 ring-slate-400 rounded-sm px-4 py-2 bg-transparent`} placeholder={'Enter task'} type="number" />
            <BsPlusCircle onClick={openTask} size={22} className={`${!input ? 'block' : 'hidden'} cursor-pointer font-bold text-lg text-teal-400`} />
            <MdSend onClick={addTask} className={`${input ? 'block': 'hidden'} cursor-pointer font-bold text-lg text-teal-400`} size={22} />
        </form>
    </div>
  )
}

export default TaskInput