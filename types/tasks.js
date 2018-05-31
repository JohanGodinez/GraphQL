export default `
    type Task{
        _id: ID!
        title: String
        assignedTo: String
        time: String
        start: String
        state: String
        comment: String
    }

    type Query{
        allTasks: [Task]!
        getTask(_id: ID!): Task!      
    }

    type Mutation {
        createTask (title: String, assignedTo: String, time: String, start: String, state: String, comment: String): Task
    }
`;
