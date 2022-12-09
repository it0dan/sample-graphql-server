import mongoose from 'mongoose';

const Schema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    }, 
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }, 
    comment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment',
        required: true,        
    }       
});


export default mongoose.model('Post', Schema);