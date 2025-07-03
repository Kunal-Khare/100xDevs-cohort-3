import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
    content:{
        type: String,
        required: true,
    },

    complete:{
        type:Boolean,
        default: false,

    },

    createdBy:{
       type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    subTodo:{
        type: mongoose.schema.Types.ObjectedId,
        ref:'SubTodo'
    }
}, {timestamps: true})


export const SubTodo = mongoose.model('SubTodo', todoSchema);