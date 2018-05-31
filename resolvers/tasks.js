export default {
    Query: {
        allTasks: (parent, args, {models}) => models.Tasks.find(),
        getTask: (parent, args, {models}) => models.Tasks.findOne(),
    },
    Mutation: {
        createTask: (parent, args, {models}) => models.Tasks.create(args),
    },
}