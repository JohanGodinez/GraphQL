export default {
    Query: {
        saludo: (parent, args, contexto, info) => {saludo: "Hola mundo"}
    },  
    Mutation: {
        createEstudiante: (parent, args, {models}) => models.Estudiantes.create(args)
    },
}