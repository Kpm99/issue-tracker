const Project=require('../models/project');
const Issue=require('../models/issue');

//rendering project page
module.exports.project=function(req,res){
    return res.render('project')
}


//creating new project
module.exports.create=async function(req,res){
   const project= await Project.create({
     projectname:req.body.projectname,
    projectauthor:req.body.projectauthor,
    projectdescription:req.body.projectdescription
   }
    );
    return res.redirect('/');

}


//show issue
module.exports.projectIssue=async function(req,res){
    console.log('req.query.projectid',req.query.projectid)
    let project=await Project.findById(req.query.projectid)
    let issuePro = await Issue.find({ projectRef: req.query.projectid });
    console.log("project",project)
    console.log("issuePro",issuePro)
    let uniqueArray=[];
    for(i of issuePro){
        for(j of i.labels){
            uniqueArray.push(j);
        }
    }
    let uniqueSet = [...new Set(uniqueArray)]
    console.log('uniqueSet',uniqueSet)
    return res.render('projectDetailsPage',{
        project:project,
        issue:issuePro,
        labelSet:uniqueSet,
        showIssue:true,
        title:'project details page'
    })

}