export default `
    type Estudiante{
        _id: ID!
        Nombre: String
        Apellido: String
        FechaNac: String
    }

    type Query{
        allEstudiantes: [Estudiante]!
        getEstudiante(_id: ID!): Estudiante!      
    }

    type Mutation {
        createEstudiante (Nombre: String, Apellido: String, FechaNac: String): Estudiante
    }

`;
