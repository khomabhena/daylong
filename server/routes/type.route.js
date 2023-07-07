import express from 'express'
import { createType, deleteType, getAllTypes, getType, updateType } from '../controllers/type.controller.js'

const routerType = express.Router()

routerType.route('/').get(getAllTypes)
routerType.route('/').post(createType)
routerType.route('/:id').get(getType)
routerType.route('/:id').patch(updateType)
routerType.route('/:id').delete(deleteType)

export default routerType