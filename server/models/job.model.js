import mongoose from 'mongoose'
const Schema = mongoose.Schema

const JobSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
})

// TypeSchema.virtual("url").get(function () {
//     return `/api/type/${this._id}`
// })
const jobModel = mongoose.model("Job", JobSchema)

export default jobModel