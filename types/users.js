export default `
    type User{
        _id: ID!
        name: String
        lastName: String
        userName: String
        password: String
        avatar: String
    }

    type Query{
        allUsers: [User]!
        getUser(_id: ID!): User!      
    }

    type Mutation {
        createUser (name: String, lastName: String, userName: String, password: String, avatar: String): User
    }
`;
