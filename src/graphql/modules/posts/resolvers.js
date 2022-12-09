import Post from '../../../models/Post';
import Comment from '../../../models/Comment';
import User from '../../../models/User';

export default {
    Post: {
        author: async (post) => {
            const authorr = await User.findById(post.author);
            return authorr;
        },
        comments: async (post) => {
            const commentt = await Comment.find().lean();
            console.log('Comment???', commentt);
            return commentt;
        },
    },
    Query: {
        posts: async () => {
            const postss = await Post.find();
            return postss;
        },
        post: async (_, { id }) => {
            const postt = await Post.findById(id);
            return postt;
        }
    },
    Mutation: {
        createPost: (_, { data }) => Post.create(data),
        updatePost: async (_, { id, data }) => {
            const updatedPost = await Post.findOneAndUpdate(id, data, { new: true });
            return updatedPost;
        },
        deletePost: async (_, { id }) => {
            const deleted = await Post.findOneAndDelete(id);
            return !!deleted;
        },
    },
};