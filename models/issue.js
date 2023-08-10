const mongoose=require('mongoose');
//creating new Schema
const issueSchema=new mongoose.Schema({

    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    projectRef:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'ProjectList',
        required:true
    },
    labels:[
        {
        type:String,
        required:true
        }
    ],



},{
    timestamps:true
})

const Issue=mongoose.model('issueSchema',issueSchema);
module.exports=Issue;