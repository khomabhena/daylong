import React from 'react'
import ProjectLight from './project-light'
import ProjectMain from './project-main'
import ProjectMain2 from './project-main2'
import ProjectUpskill from './project-upskill'


const Buckets = ({ children }) => {
  return (
    <div className=' mt-8 px-12 w-full grid grid-cols-1 md:grid-cols-2 gap-8'>
        <ProjectLight />
        <ProjectMain />
        <ProjectMain2 />
        <ProjectUpskill />
    </div>
  )
}

export default Buckets