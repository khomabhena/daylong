import React from 'react'

const Main = ({ handleSub, type, email }) => {
  return (
    <div className='px-4 pb-8'>
        <div className=' h-80 overflow-auto mb-4'>
            <h1 className=' text-lg text-slate-400 mt-4 font-light'>Main Projects</h1>
            <div onClick={handleSub} className=' mt-4 cursor-pointer'>
                <h2 className=' text-lg text-slate-300 '>Main Project</h2>
                <ol className=' list-decimal list-inside mt-2 text-slate-400'>
                    <li>Sub Project 1</li>
                    <li>Sub Project 2</li>
                    <li>Sub Project 3</li>
                </ol>
            </div>

            <div className=' mt-4 cursor-pointer'>
                <h2 className=' text-lg text-slate-300 '>Main Project</h2>
                <ol className=' list-decimal list-inside mt-2 text-slate-400'>
                    <li>Sub Project 1</li>
                    <li>Sub Project 2</li>
                    <li>Sub Project 3</li>
                </ol>
            </div>
        </div>

        <form className=' flex flex-col'>
            <input type="text" placeholder='create main project' className=' border border-emerald-600 bg-slate-950/50 rounded-md shadow-md shadow-emerald-600 text-slate-300' />
            <button type="submit" className=' bg-slate-950/80 mt-4 py-2 rounded-md'>Create Main Project</button>
        </form>
    </div>
  )
}

export default Main