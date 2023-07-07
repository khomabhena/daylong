import mainModel from "../models/main.model.js"

export const createMain = async (req, res) => {
    try {
        const { name, email } = req.body
    
        const newProject = await mainModel.create({
            name,
            email
        })
    
        res.status(200).json(newProject)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const getMain = async (req, res) => {
    try {
        const id = req.query.id
    
        const project = await mainModel.findById(id).exec()
    
        res.status(200).json(project)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const getAllMain = async (req, res) => {
    const { job, main, email } = req.query
    try {
        const projects = await mainModel.find({ email: email })
            .sort({dateCreated: -1})
            .populate({
                path: 'allSub',
                match: {
                    main: main,
                    job: job 
                }
            })

        res.status(200).json(projects)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const updateMain = async (req, res) => {}

export const deleteMain = async (req, res) => {
    
}

