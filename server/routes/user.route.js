import express from 'express'
import { createUser, deleteUser, getAllUser, getUser, updateUser } from '../controllers/user.controller.js'

const routerUser = express.Router()

routerUser.route('/').get(getAllUser)
routerUser.route('/').post(createUser)
routerUser.route('/:id').get(getUser)
routerUser.route('/:id').patch(updateUser)
routerUser.route('/:id').delete(deleteUser)

export default routerUser