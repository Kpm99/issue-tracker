const Project=require('../models/project');
const Issue=require('../models/issue');

//rendering issue page
module.exports.issuepage=async function(req,res){
   const projectDetail= await Project.findById(req.params.projectId);
    if(projectDetail){
        res.render('issuePage',{
            title:'create issue',
            projectId:req.params.projectId,
            projectDet:projectDetail

        })
    }
}

//creating issues
module.exports.create=async function(req,res){
    let issue=await Issue.create({
        title:req.body.title,
        description:req.body.description,
        author:req.body.author,
        projectRef: req.body.projectRef,
        labels:req.body.labels
    });
    let project = await Project.findById(req.body.projectRef);

    issue.save();
    project.issue.push(issue);
    project.save();
    console.log('issue is created successfully',issue);
    return res.redirect("/");
}

//filter issue
module.exports.filterIssue= async function(req,res){
    console.log(req.body,"req.body")
    let projectData= await Project.findById(req.body.projectId).populate('issue')
    console.log("projectData",projectData)
    console.log('kk',projectData.issue);
    let filterdata = new Set();
    console.log('kjhuhk',filterdata)
    if(req.body.searchAuthor){
        for(i of projectData.issue){
            if(i.author === req.body.searchAuthor){
                filterdata.add(i)
            }
        }
    }else if(req.body.searchTitleDesc){
        for(i of projectData.issue){
            if(i.title === req.body.searchTitleDesc || i.description === req.body.searchTitleDesc){
                filterdata.add(i)
            }
        }
    }
    else{
        for(i of projectData.issue){
            for(j of i.labels){
                console.log(j,"kljk")
                if(j === req.body.label1 || j === req.body.label2){
                    filterdata.add(i)
                }
            }
        }
    }
    let issueRleToPro= await Issue.find({projectRef: req.body.projectId})
    console.log('lkk',issueRleToPro)
    return res.render('projectDetailsPage',{
        title:'filter issue',
        showIssue:false,
        filterdata:filterdata,
    })
}