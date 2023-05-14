import React from 'react'
import Card from './card'

const ProjectMain2 = () => {
    const data = {
        name: '2nd Main Project',
        time: '14:00 - 15:00'
    }
  return (
    <div>
        <Card data={data} />
    </div>
  )
}

export default ProjectMain2