import React from 'react'

const Task = ({ handleSub, handleMain, type, email }) => {
  return (
    <div className='px-4 pb-8'>
        <div className=' h-80 overflow-auto mb-4'>
            <h1 className=' text-lg text-slate-400 mt-4 font-light'>Tasks</h1>
            <div className=' mt-4'>
                <h2 onClick={handleMain} className=' cursor-pointer text-lg text-slate-300 font-semibold'>Main Project</h2>
                <h2 onClick={handleSub} className=' cursor-pointer text-base text-slate-300 '>Sub Project</h2>
                <ol className=' mt-2 text-slate-400'>
                    <li className=' bg-slate-900/50 px-4 py-2 mb-2 rounded-md'>
                        <div className=' flex justify-between items-center'>
                            <p className=' text-lg'>Task 1</p>
                            <input className='rounded-full h-5 w-5 checked:bg-emerald-400' type='checkbox' />
                        </div>
                    </li>
                    <li className=' bg-slate-900/50 px-4 py-2 mb-2 rounded-md'>
                        <div className=' flex justify-between items-center'>
                            <p className=' text-lg'>Task 2</p>
                            <input className='rounded-full h-5 w-5 checked:bg-emerald-400' type='checkbox' />
                        </div>
                    </li>
                </ol>
            </div>
        </div>

        <form className=' flex flex-col'>
            <input type="text" placeholder='create task' className=' border border-emerald-600 bg-slate-950/50 rounded-md shadow-md shadow-emerald-600 text-slate-300' />
            <button type="submit" className=' bg-slate-950/80 mt-4 py-2 rounded-md'>Create Task</button>
        </form>
    </div>
  )
}

export default Task