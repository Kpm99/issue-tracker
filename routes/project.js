const express=require('express');
const router=express.Router();
const projectController=require('../controllers/projectController');

router.get('/createproject',projectController.project);
router.post('/create',projectController.create);
router.get('/issue',projectController.projectIssue);


module.exports=router;