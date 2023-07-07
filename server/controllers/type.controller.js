import typeModel from '../models/job.model.js'

export const createType = async (req, res) => {
    try {
        const { name, email, time } = req.body 
        
        const newJob = await typeModel.create({
            name: name,
            email: email,
            time: time
        })
        
        res.status(200).json(newJob)
    } catch (error) {
        res.status(500).json({message_one: error.message })
    }
}

export const getType = async (req, res) => {

}

export const getAllTypes = async (req, res) => {
    try {
        const allJobs = await typeModel.find({})

        res.status(200).json(allJobs)
    } catch (error) {
        res.status(500).json({message: error.message })
    }
}

export const updateType = async (req, res) => {}

export const deleteType = async (req, res) => {}