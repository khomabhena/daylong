import express from 'express'
import { createJob, deleteJob, getAllJobs, getJob, updateJob } from '../controllers/job.controller.js'

const routerJob = express.Router()

routerJob.route('/').get(getAllJobs)
routerJob.route('/').post(createJob)
routerJob.route('/:id').get(getJob)
routerJob.route('/:id').patch(updateJob)
routerJob.route('/:id').delete(deleteJob)

export default routerJob