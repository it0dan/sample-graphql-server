import Comment from '../../../models/Comment';
import User from '../../../models/User';
import Post from '../../../models/Post';

export default {
    Comment: {
        author: async (comment) => {
            const authorr = await User.findById(comment.author);
            return authorr;
        },
        post: async (comment) => {
            const postt = await Post.findById(comment.post);
            return postt;
        },
    },
    Query: {
        comments: async () => {
            const commentss = await Comment.find();
            return commentss;
        },
        comment: async (_, {id}) => {
            const comentt = await Comment.findById(id);
            return comentt;
        }
    },
    Mutation: {
        createComment: (_, {data}) => Comment.create(data),
        updateComment: async (_, {id, data}) => {
            const updatedComment = await Comment.findOneAndUpdate(id, data, {new: true});
            return updatedComment;
        },
        deleteComment: async (_, {id}) => {
            const deleted = await Comment.findOneAndDelete(id);
            return !!deleted;
        },
    },
};