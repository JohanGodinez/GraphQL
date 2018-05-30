export default `
    type Estudiante{
        _id: ID!
        Nombre: String
        Apellido: String
        FechaNac: String
    }

    type Query{
        saludo: String
    }

    type Mutation {
        createEstudiante (Nombre: String, Apelldio: String, FechaNac: String): Estudiante
    }

`;
