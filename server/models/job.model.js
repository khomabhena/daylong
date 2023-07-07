import mongoose from 'mongoose'
const Schema = mongoose.Schema

const TypeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    }
})

// TypeSchema.virtual("url").get(function () {
//     return `/api/type/${this._id}`
// })
const typeModel = mongoose.model("Type", TypeSchema)

export default typeModel