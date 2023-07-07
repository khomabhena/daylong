import mongoose from 'mongoose'
const Schema = mongoose.Schema

const SubSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    job: {
        type: Schema.Types.ObjectId,
        ref: "Job"
    },
    main: {
        type: Schema.Types.ObjectId,
        ref: 'Main'
    },
    dateCreated: {
        type: Date,
        default: Date.now
    },
    allTasks: [{
        type: Schema.Types.ObjectId,
        ref: 'Task'
    }]
})

// ProjectSchema.virtual("url").get(function () {
//     return `/api/projects/${this._id}`
// })

const subModel = mongoose.model("Sub", SubSchema)

export default subModel