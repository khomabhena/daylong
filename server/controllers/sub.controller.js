import mainModel from '../models/main.model.js'
import subModel from '../models/sub.model.js'

export const createSub = async (req, res) => {
    try {
        const { name, email, job, main } = req.body
        const newMain = await mainModel.findOne({ email: email, _id: main})
        const newSub = await subModel.create({
            name,
            email,
            job,
            main
        })

        const id = await newSub._id
        newMain.allSub.push(id)
        newMain.save()

        res.status(200).send(newSub)
    } catch (error) {
        res.status(500).json({message: error.message })
    }
}

export const getSub = async (req, res) => {}

export const getAllSub = async (req, res) => {
    try {
        const {job, main, email } = req.query
        
        const allSub = await subModel.find({
            job: job,
            main: main,
            email: email
        }).populate('allTasks')

        res.status(200).json(allSub)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const updateSub = async (req, res) => {}

export const deleteSub = async (req, res) => {}