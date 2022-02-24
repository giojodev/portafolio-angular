'use strict'

// const { param } = require('../app');
var Project= require('../models/project');
var fs=require('fs');

var controller={
    
    home: function(req,res){
        return res.status(200).send({
            message:'Home'
        })
    },
    test:function(req,res){
        return res.status(200).send({
            message:'Metodo test del controlador de project'
        })
    },

    saveProject:function(req,res){
        var project=new Project();

        var params=req.body;
        project.name=params.name;
        project.description=params.description;
        project.category=params.category;
        project.year=params.year;
        project.langs=params.langs;
        project.image=null;

        project.save((err,projectStored)=>{
            if(err) return res.status(500).send({
                message:"Error al guardar"
            })
            
            if(!projectStored) return res.status(404).send({
                message:"No se ha podido guardar el proyecto"
            })

            return res.status(200).send({ project:projectStored});
        });
        
        return res.status(200).send({
            
            project:project,
            message:'Metodo SaveProject'
        })
    
    },

    getProject:function(req,res){
        var projectId=req.params.id;
        if(projectId==null) return res.status(404).send({message:"El proyecto no existe."});
        Project.findById(projectId,(err,project)=>{

            if(err) return res.status(500).send({message:"Error al devolver los datos."});

            if(!project) return res.status(404).send({message:"El proyecto no existe."});

            return res.status(200).send({
                project
            });

        });
    },

    getProjects:function(req,res){
        Project.find({}).sort('-year').exec((err,projects)=>{
            if(err) return res.status(500).send({message:"Error al devolver los datos."});

            if(!projects) return res.status(404).send({message:"El proyecto no existe."});

            return res.status(200).send({
                projects
            });
        });
    },
    updateProject:function(req,res){
        var projectId=req.params.id;
        var update=req.body;

        Project.findByIdAndUpdate(projectId,update,{new:true},(err,projectupdate)=>{
            if(err) return res.status(500).send({message:"Error al actualizar los datos."});

            if(!projectupdate) return res.status(404).send({message:"No existe el proyecto para actualizar."});

            return res.status(200).send({
                projectupdate
            });
        });
    },
    deleteProject:function(req,res){
        var projectId=req.params.id;
        
        Project.findByIdAndRemove(projectId,(err,projectDelete)=>{
            if(err) return res.status(500).send({message:"Error al borrar los datos."});

            if(!projectDelete) return res.status(404).send({message:"No existe el proyecto para borrar."});

            return res.status(200).send({
                project:projectDelete
            });
        })
    },
    uploadImage:function(req,res){
        var projectId=req.params.id;
        
        var filename='Imagen no subida...';

        if(req.files){
            var filePath=req.files.image.path;
            var fileSplit=filePath.split('\\');
            var fileName=fileSplit[1];
            var extSplit= fileName.split('\.');
            var fileExt=extSplit[1];

            if(fileExt=='png' || fileExt=='jpg' || fileExt=='jpeg' || fileExt=='gif'){
                Project.findByIdAndUpdate(projectId,{image:fileName},{new:true},(err,projectUpdated)=>{
                    if(err) return res.status(200).send({
                        message:"La imagen no se ha subido"
                    })
                    if(!projectUpdated) return res.status(404).send({send:"La imagen no existe"});
    
                    return res.status(200).send({
                        projectUpdated
                    })
                })
            }else{
                fs.unlink(filePath,(err)=>{
                    return res.status(200).send({message:'La extension no es valida'});
                })
            }
        }
        else{
            return res.status(200).send({
                message:filename  
            })
        }
    }

};

module.exports=controller;