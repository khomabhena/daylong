import React from 'react'
import TaskCheckbox from './task-checkbox'

const List = ({ children }) => {
  return (
    <div className=' mt-4'>
        <TaskCheckbox />
        <TaskCheckbox />
        {children}
    </div>
  )
}

export default List