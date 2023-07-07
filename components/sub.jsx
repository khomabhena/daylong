import React from 'react'

const Sub = ({handleTask, handleMain, type, email }) => {
  return (
    <div className='px-4 pb-8'>
        <div className=' h-80 overflow-auto mb-4'>
            <h1 className=' text-lg text-slate-400 mt-4 font-light'>Sub Projects</h1>
            <div className=' mt-4'>
                <h2 onClick={handleMain} className=' cursor-pointer text-lg text-slate-300 font-semibold'>Main Project</h2>
                <ol className=' list-decimal list-inside mt-2 text-slate-400'>
                    <li onClick={handleTask} className=' cursor-pointer'>Sub Project 1</li>
                    <li onClick={handleTask} className=' cursor-pointer'>Sub Project 2</li>
                    <li onClick={handleTask} className=' cursor-pointer'>Sub Project 3</li>
                </ol>
            </div>
        </div>

        <form className=' flex flex-col'>
            <input type="text" placeholder='create sub project' className=' border border-emerald-600 bg-slate-950/50 rounded-md shadow-md shadow-emerald-600 text-slate-300' />
            <button type="submit" className=' bg-slate-950/80 mt-4 py-2 rounded-md'>Create Sub Project</button>
        </form>
    </div>
  )
}

export default Sub