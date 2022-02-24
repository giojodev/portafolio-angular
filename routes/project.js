'use strict'

var express=require('express');
// const { route } = require('../app');

var projectController=require('../controllers/project');

var router=express.Router();

var multipart=require('connect-multiparty');
var multipartMiddleware=multipart({uploadDir:'./uploads'});

router.get('/home',projectController.home);
router.post('/test',projectController.test);
router.post('/save-project',projectController.saveProject);
router.get('/project/:id?',projectController.getProject);
router.get('/projects',projectController.getProjects);
router.put('/project/:id',projectController.updateProject);
router.delete('/project/:id',projectController.deleteProject);
router.post('/upload-image/:id',multipartMiddleware,projectController.uploadImage);

module.exports=router;