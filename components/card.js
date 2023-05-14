import React, { useState } from 'react'
import { MdSend } from 'react-icons/md'
import TaskInput from './task-input'
import List from './list'
import ListDelete from './list-delete'
import ListFull from './list-full'

const Card = ({data}) => {
  const [list, setList] = useState(true)
  const [listFull, setListFull] = useState(false)
  const [listDelete, setListDelete] = useState(false)

  const handleListDelete = () => {
    setListDelete(prev => !prev)
    setList(prev => !prev)
  }

  const handleListFull = () => {
    setListFull(prev => !prev)
  }

  return (
    <div className=' border border-slate-400 rounded-md mb-12'>
        <div onClick={handleListFull} className=' cursor-pointer flex flex-col justify-center items-center bg-slate-950 bg-opacity-30 rounded-md py-4'>
          <h2 className='text-slate-300 font-semibold text-xl'>{data?.name}</h2>
          <h2 className='text-slate-400'>{data?.time}</h2>
        </div>
    
        {!listFull && <div>
          <div className=' px-8 py-8'>
            <h2 onClick={handleListDelete} className=' border w-max px-4 py-2 rounded-md cursor-pointer border-slate-500 '>Project Name</h2>
            {list && <List />}
            {listDelete && <ListDelete />}
            {list && <TaskInput />}
          </div>
          <div className=' flex gap-8 justify-between items-center px-4 mt-12 border-t border-slate-400 py-4'>
            <input className={`text-slate-300 text-lg border-t-0 border-l-0 border-r-0 w-full px-4 py-2 bg-transparent`} placeholder={'Add new Project'} type="text" />
            <MdSend size={24} className=' cursor-pointer font-bold text-lg text-teal-400' />
          </div>
        </div>}

        {
          listFull && <ListFull />
        }
    </div>
  )
}

export default Card