import React, { useRef, useState } from 'react'

const TaskCheckbox = ({ started, finished }) => {
    const refStarted = useRef()
    const refFinished = useRef()
    const refCheckbox = useRef()
    const [checked, setChecked] = useState(false)

    const handleCheck = () => {
        setChecked(prev => !prev)
        refCheckbox.current.checked = checked
    }

    const handleStarted = (e) => {
      refStarted.current.checked = true
      console.log('Start')
    }
    
    const handleFinished = (e) => {
      refFinished.current.checked = !finished
      console.log('Start')
    }

  return (
    // <div onClick={handleCheck} className=' cursor-pointer pt-4 flex gap-2 items-center'>
    //     <input onChange={handleCheck} ref={refCheckbox} checked={checked} className=' rounded-full h-5 w-5 checked:bg-emerald-400' type='checkbox' />
    //     <p className=' text-slate-300'>Design MongoDB Database</p>
    // </div>
    <div className=' flex text-sm justify-between'>
        <label>Started: <input ref={refStarted} checked={started} onClick={handleStarted} onChange={handleStarted} className='rounded-full h-4 w-4 checked:bg-emerald-400' type='checkbox' /></label>
        <label>Finished: <input ref={refFinished} checked={finished} onClick={handleFinished} onChange={handleFinished} className='rounded-full h-4 w-4 checked:bg-emerald-400' type='checkbox' /></label>
    </div>
  )
}

export default TaskCheckbox