import express from 'express'
import { createTask, deleteTask, getAllTasks, getTask, updateTask } from '../controllers/task.controller.js'

const routerTask = express.Router()

routerTask.route('/').get(getAllTasks) //Requires quires job and sub
routerTask.route('/').post(createTask)
routerTask.route('/:id').get(getTask)
routerTask.route('/:id').patch(updateTask)
routerTask.route('/:id').delete(deleteTask)

export default routerTask