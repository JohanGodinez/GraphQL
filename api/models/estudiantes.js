import mongoose from 'mongoose'

const estudianteSchema = mongoose.Schema({
    Nombre: {
        type: String,
        unique: true,
    },
    Apellido: String,
    FechaNac: String
})

const estudianteModel = mongoose.model('Estudiantes',estudianteSchema)

export default estudianteModel