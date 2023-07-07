import mongoose from 'mongoose'
const Schema = mongoose.Schema

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        
    }
})

// TypeSchema.virtual("url").get(function () {
//     return `/api/type/${this._id}`
// })
const userModel = mongoose.model("User", UserSchema)

export default userModel