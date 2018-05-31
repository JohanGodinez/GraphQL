import mongoose from 'mongoose'

const taskSchema = mongoose.Schema({
    title: String,
    assignedTo: String,
    time: String,
    start: String,
    state: String,
    comment: String
})

const taskModel = mongoose.model('Tasks',taskSchema)

export default taskModel