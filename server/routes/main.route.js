import express from "express"
import { createMain, deleteMain, getAllMain, getMain, updateMain } from '../controllers/main.controller.js'

const routerMain = express.Router()

routerMain.route('/').get(getAllMain)
routerMain.route('/').post(createMain)
routerMain.route('/:id').get(getMain)
routerMain.route('/id').patch(updateMain)
routerMain.route('/:id').delete(deleteMain)

export default routerMain