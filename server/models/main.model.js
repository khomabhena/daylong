import mongoose from 'mongoose'
const Schema = mongoose.Schema

const MainSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    allSub: [{
        type: Schema.Types.ObjectId,
        ref: 'Sub'
    }],
    dateCreated: {
        type: Date,
        default: Date.now
    }
})

// ProjectSchema.virtual("url").get(function () {
//     return `/api/projects/${this._id}`
// })

const mainModel = mongoose.model("Main", MainSchema)

export default mainModel