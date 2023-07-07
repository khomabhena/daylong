import express from 'express'
import { createSub, deleteSub, getAllSub, getSub, updateSub } from '../controllers/sub.controller.js'

const routerSub = express.Router()

routerSub.route('/').get(getAllSub) //Requires queries job and main
routerSub.route('/').post(createSub)
routerSub.route('/:id').get(getSub)
routerSub.route('/:id').patch(updateSub)
routerSub.route('/:id').delete(deleteSub)

export default routerSub