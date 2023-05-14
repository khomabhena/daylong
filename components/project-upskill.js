import React from 'react'
import Card from './card'

const ProjectUpskill = () => {
    const data = {
        name: 'Upskill & Reading',
        time: '20:00 - 22:00'
    }
  return (
    <div>
        <Card data={data} />
    </div>
  )
}

export default ProjectUpskill