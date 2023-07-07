import { fetchMyData } from '@/fetch/fetchMyData'
import { postMyData } from '@/fetch/postMyData'
import React, { useEffect, useState, useRef } from 'react'
import TaskCheckbox from './task-checkbox'

const Task = ({ handleSub, handleMain, main, sub, type, email }) => {
    const [ name, setName ] = useState('')
    const refName = useRef('')
    const [ data, setData ] = useState([])
    const [ mainData, setMainData ] = useState({})
    const [ subData, setSubData ] = useState({})

    useEffect(() => {
        getTask()
        getMain()
        getSub()
    }, [])

    const getTask = async () => {
        const { status, data } = await fetchMyData(`/api/v1/task`, { sub, type, email })
        if (status === 200)
            setData(data)
        else
            console.log(data.message);
    }

    const getMain = async () => {
        const { status, data } = await fetchMyData(`/api/v1/main/${main}`)
        if (status === 200) {
            setMainData(data)
        } else
            console.log(data.message)
    }

    const getSub = async () => {
        const { status, data } = await fetchMyData(`/api/v1/sub/${sub}`)
        if (status === 200)
            setSubData(data)
        else
            console.log(data.message)
    }

    const handleCreateTask = async (e) => {
        e.preventDefault()
        const { status, data } = await postMyData(`/api/v1/task`, { name, email, sub, type })
        if (status == 200) {
            refName.current.value = ''
            getTask()
        }
    }

  return (
    <div className='px-4 pb-8'>
        <div className=' h-80 overflow-auto mb-4'>
            <h1 className=' text-lg text-slate-400 mt-4 font-light'>Tasks</h1>
            <div className=' mt-4'>
                <h2 onClick={handleMain} className=' cursor-pointer text-lg text-slate-300 font-semibold'>{mainData.name}</h2>
                <h2 onClick={handleSub} className=' cursor-pointer text-base text-slate-300 '>{subData.name}</h2>
                <ol className=' mt-2 text-slate-400'>
                    {
                        data.length >= 1 && data?.map(({_id, name, started, finished}) => (
                            <li key={_id} className=' bg-slate-900/50 px-4 py-2 mb-2 rounded-md'>
                                <div className=' flex justify-between items-center'>
                                    <p className=' text-lg'>{name}</p>
                                </div>
                                <TaskCheckbox started={started} finished={finished} />
                            </li>
                        )) || <span>no tasks found</span>
                    }
                </ol>
            </div>
        </div>

        <form onSubmit={handleCreateTask} className=' flex flex-col'>
            <input onChange={(e) => setName(e.target.value)} ref={refName} type="text" placeholder='create task' className=' border border-emerald-600 bg-slate-950/50 rounded-md shadow-md shadow-emerald-600 text-slate-300' />
            <button type="submit" className=' bg-slate-950/80 mt-4 py-2 rounded-md'>Create Task</button>
        </form>
    </div>
  )
}

export default Task