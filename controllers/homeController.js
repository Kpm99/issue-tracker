const Project=require('../models/project');
//home page controller
module.exports.home=async function(req,res){
    const project=await Project.find({})
    //rendering home.ejs
    return res.render('home',{
        title:"home",
        project:project,
    });
}