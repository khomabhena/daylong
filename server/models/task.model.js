import mongoose from "mongoose"
const Schema = mongoose.Schema

const TaskSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    started: {
        type: Date 
    },
    finished: {
        type: Date
    },
    sub: {
        type: Schema.Types.ObjectId,
        ref: 'Sub',
        required: true
    },
    type: {
        type: Schema.Types.ObjectId,
        ref: 'Type',
        required: true
    }
})

// TaskSchema.virtual("url").get(function () {
//     return `/api/task/${this._id}`
// })

const taskModel = mongoose.model('Task', TaskSchema)

export default taskModel