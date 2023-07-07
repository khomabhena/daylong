import mainModel from '../models/main.model.js'
import subModel from '../models/sub.model.js'

export const createSub = async (req, res) => {
    try {
        const { name, email, type, main } = req.body
        const newMain = await mainModel.findById(main)
        const newSub = await subModel.create({
            name,
            email,
            type,
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

export const getSub = async (req, res) => {
    try {
        const { id } = req.params
        const data = await subModel.findById(id)
        
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const getAllSub = async (req, res) => {
    try {
        const {type, main, email } = req.query
        
        const allSub = await subModel.find({
            type: type,
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