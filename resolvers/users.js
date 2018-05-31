export default {
    Query: {
        allUsers: (parent, args, {models}) => models.Users.find(),
        getUser: (parent, args, {models}) => models.Users.findOne(),
    },
    Mutation: {
        createUser: (parent, args, {models}) => models.Users.create(args),
    },
}