import jobModel from '../models/job.model.js'

export const createJob = async (req, res) => {
    try {
        const { name, email } = req.body 
        
        const newJob = await jobModel.create({
            name: name,
            email: email
        })
        
        res.status(200).json(newJob)
    } catch (error) {
        res.status(500).json({message_one: error.message })
    }
}

export const getJob = async (req, res) => {

}

export const getAllJobs = async (req, res) => {
    try {
        const allJobs = await jobModel.find({})

        res.status(200).json(allJobs)
    } catch (error) {
        res.status(500).json({message: error.message })
    }
}

export const updateJob = async (req, res) => {}

export const deleteJob = async (req, res) => {}