import React from 'react'
import Card from './card'

const ProjectMain = () => {
  const data = {
    name: 'Main Project',
    time: '10:00 - 14:00'
}
return (
  <div>
      <Card data={data} />
  </div>
)
}

export default ProjectMain