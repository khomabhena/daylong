import subModel from '../models/sub.model.js'
import taskModel from '../models/task.model.js'

export const createTask = async (req, res) => {
    try {
        const { name, email, sub, type } = req.body

        const prevSub = await subModel.findById(sub)
        const newTask = await taskModel.create({
            name,
            email,
            sub,
            type
        })
        const id = await newTask._id
        prevSub.allTasks.push(id)
        prevSub.save()

        res.status(200).send(newTask)
    } catch (error) {
        res.send(500).json({ message: error.message})
    }
}

export const getTask = async (req, res) => {}

export const getAllTasks = async (req, res) => {
    try {
        const { type, sub, email } = req.query

        const allTask = await taskModel.find({
            type,
            sub,
            email
        })

        res.status(200).json(allTask)
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

export const updateTask = async (req, res) => {}

export const deleteTask = async (req, res) => {}