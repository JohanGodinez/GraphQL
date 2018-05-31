import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    name: {
        type: String,
        unique: true,
    },
    lastName: String,
    userName: String,
    password: String,
    avatar: String,
})

const userModel = mongoose.model('Users',userSchema)

export default userModel