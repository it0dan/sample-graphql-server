import User from '../../../models/User';

export default {
    User: {
        fullName: (user) => `${user.firstName} ${user.lastName}`,
    },
    Query: {
        users: async () => {
            const userss = await User.find();
            return userss;
        },
        user: async (_, { _id }) => {
            const userr = await User.findById(_id);
            return userr;
        },
        userEmail: async (_, { email }) => {
            const userr = await User.findOne({email});
            return userr;
        }        
    },
    Mutation: {
        createUser: async (_, { data }) => {
            const user = await User.create(data);
            return user;
        },
        updateUser: async (_, { id, data }) => {
            const updated = await User.findOneAndUpdate(id, data, { new: true });
            return updated;
        },
        deleteUser: async (_, { id }) => {
            const deleted = await User.findOneAndDelete(id);
            return !!deleted;
        },
    },
};