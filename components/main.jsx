import { fetchMyData } from '@/fetch/fetchMyData'
import { postMyData } from '@/fetch/postMyData'
import React, { useEffect, useState, useRef } from 'react'

const Main = ({ handleSub, type, email }) => {
    const [main, setMain] = useState([])
    const [name, setName] = useState('')
    const refName = useRef('')

    useEffect(() => {
        getMain()
    }, [])

    const getMain = async () => {
        const { status, data } = await fetchMyData(`/api/v1/main`, { type, email })
        if (status === 200) {
            setMain(data)
        }
    }

    const handleCreateMain = async (e) => {
        e.preventDefault()
        const { status, data } = await postMyData(`/api/v1/main`, { name, email })
        if (status === 200) {
            refName.current.value = ''
            getMain()
        } else 
            console.log(data.message)
    }

  return (
    <div className='px-4 pb-8'>
        <div className=' h-80 overflow-auto mb-4'>
            <h1 className=' text-lg text-slate-400 mt-4 font-light'>Main Projects</h1>
            {
                main.length >= 1 && main?.map(({name, _id, allSub}) => (
                    <div key={_id} onClick={() => handleSub(_id)} className=' mt-4 cursor-pointer'>
                        <h2 className=' text-base text-slate-300 '>{name}</h2>
                        <ol className=' list-decimal list-inside mt-2 text-slate-400'>
                            {
                                allSub?.map(({_id, name}) => (
                                    <li className='  ml-4 text-sm' key={_id}>{name}</li>
                                ))
                            }
                        </ol>
                    </div>
                )) || <span className=' ml-4 text-sm text-slate-500'>no main projects found</span>
            }
        </div>

        <form onSubmit={handleCreateMain} className=' flex flex-col'>
            <input ref={refName} onChange={(e) => setName(e.target.value)} type="text" placeholder='create main project' className=' border border-emerald-600 bg-slate-950/50 rounded-md shadow-sm shadow-emerald-600 text-slate-300' />
            <button type="submit" className=' bg-slate-950/80 mt-4 py-2 rounded-md'>Create Main Project</button>
        </form>
    </div>
  )
}

export default Main