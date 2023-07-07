import React, { useRef, useState } from 'react'

const TaskCheckbox = () => {
    const refCheckbox = useRef()
    const [checked, setChecked] = useState(false)

    const handleCheck = () => {
        setChecked(prev => !prev)
        refCheckbox.current.checked = checked
    }

  return (
    <div onClick={handleCheck} className=' cursor-pointer pt-4 flex gap-2 items-center'>
        <input onChange={handleCheck} ref={refCheckbox} checked={checked} className=' rounded-full h-5 w-5 checked:bg-emerald-400' type='checkbox' />
        <p className=' text-slate-300'>Design MongoDB Database</p>
    </div>
  )
}

export default TaskCheckbox