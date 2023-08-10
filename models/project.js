const mongoose=require('mongoose');
//creating new Schema
const projectSchema=new mongoose.Schema({

    projectname:{
        type:String,
        required:true
    },
    projectdescription:{
        type:String,
        required:true
    },
    projectauthor:{
        type:String,
        required:true
    },
    issue:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'issueSchema'
        },
    ],

},{
    timestamps:true
})

const Project=mongoose.model('Project',projectSchema);
module.exports=Project;