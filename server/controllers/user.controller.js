import User from '../models/user.model.js'

export const createUser = async (req, res) => {
    try {
        const { name, email, avatar } = req.body
    
        const userExist = await User.findOne({ email })
        if (userExist) return res.status(200).json(userExist)
    
        const newUser = await User.create({
            name,
            email,
            avatar
        })
    
        return res.status(200).json(newUser)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const getUser = async (req, res) => {}

export const getAllUser = async (req, res) => {}

export const updateUser = async (req, res) => {}

export const deleteUser = async (req, res) => {}