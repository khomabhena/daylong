import { fetchMyData } from '@/fetch/fetchMyData'
import { postMyData } from '@/fetch/postMyData'
import { getMain } from '@/server/controllers/main.controller'
import React, { useEffect, useRef, useState } from 'react'

const Sub = ({handleTask, handleMain, main, type, email }) => {
    const [ data, setData ] = useState([])
    const [ mainData, setMainData ] = useState({})
    const [ name, setName ] = useState('')
    const refName = useRef('')

    useEffect(() => {
        getSub()
        getMain()
    }, [])

    const getMain = async () => {
        const { status, data } = await fetchMyData(`/api/v1/main/${main}`)
        if (status === 200) {
            setMainData(data)
        } else
            console.log(data.message)
    }

    const getSub = async () => {
        const { status, data } = await fetchMyData(`/api/v1/sub`, { main, type, email })
        if (status === 200)
            setData(data)
        else
            console.log(data.message)
    }

    const handleCreateSub = async (e) => {
        e.preventDefault()
        const { status, data } = await postMyData(`/api/v1/sub`, { name, main, type, email })
        if (status === 200) {
            refName.current.value = ''
            getSub()
        }
    }

  return (
    <div className='px-4 pb-8'>
        <div className=' h-80 overflow-auto mb-4'>
            <h1 className=' text-lg text-slate-400 mt-4 font-light'>Sub Projects</h1>
            <div className=' mt-4'>
                <h2 onClick={handleMain} className=' cursor-pointer text-lg text-slate-300 font-semibold'>{mainData.name}</h2>
                <ol className=' list-decimal list-inside mt-2 text-slate-400'>
                    {
                        data?.map(({name, _id}) => (
                            <li key={_id} onClick={() => handleTask(_id)} className=' cursor-pointer'>{name}</li>
                        ))
                    }
                    {/* <li onClick={handleTask} className=' cursor-pointer'>Sub Project 2</li> */}
                    {/* <li onClick={handleTask} className=' cursor-pointer'>Sub Project 3</li> */}
                </ol>
            </div>
        </div>

        <form onSubmit={handleCreateSub} className=' flex flex-col'>
            <input ref={refName} onChange={(e) => setName(e.target.value)} type="text" placeholder='create sub project' className=' border border-emerald-600 bg-slate-950/50 rounded-md shadow-md shadow-emerald-600 text-slate-300' />
            <button type="submit" className=' bg-slate-950/80 mt-4 py-2 rounded-md'>Create Sub Project</button>
        </form>
    </div>
  )
}

export default Sub