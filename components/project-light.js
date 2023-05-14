import React from 'react'
import Card from './card'

const ProjectLight = () => {
    const data = {
        name: 'Light Work',
        time: '07:00 - 10:00'
    }
  return (
    <div>
        <Card data={data} />
    </div>
  )
}

export default ProjectLight