import React from 'react'
import { TiDeleteOutline } from 'react-icons/ti'

const ListDelete = () => {
  return (
    <ol className=' list-inside mt-4 list-decimal'>
        <div className=' flex items-center justify-between text-lg gap-4 text-slate-400'>
            <li>Project One</li>
            <TiDeleteOutline className=' text-red-500 cursor-pointer' size={23} />
        </div>
        <div className=' flex items-center justify-between text-lg gap-4 text-slate-400'>
            <li>Project Two</li>
            <TiDeleteOutline className=' text-red-500 cursor-pointer' size={23} />
        </div>
    </ol>
  )
}

export default ListDelete