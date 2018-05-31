export default {
    Query: {
        allEstudiantes: (parent, args, {models}) => models.Estudiantes.find(),
        getEstudiante: (parent, args, {models}) => models.Estudiantes.findOne(),
    },
    Mutation: {
        createEstudiante: (parent, args, {models}) => models.Estudiantes.create(args),
    },
}