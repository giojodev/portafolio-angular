import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjecService } from 'src/app/services/project.service';
import { UploadService } from 'src/app/services/upload.service';
import { Global } from 'src/app/services/global';
import { ActivatedRoute, Router,Params } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: '../create/create.component.html',
  styleUrls: ['./edit.component.css'],
  providers:[ProjecService,UploadService]
})
export class EditComponent implements OnInit {
    public title: string;
    public project:Project;
    public status:string;
    public filestToUpload:Array<File>;
    public saveProject:any; 
    public url:string;

  constructor(
    private _projectService:ProjecService,
    private _uploadService:UploadService,
    private _route:ActivatedRoute,
    private _router:Router
    ) { 
    this.title="Editar proyecto";
    this.status="";
    this.project= new Project('','','','',2022,'','');
    this.filestToUpload=[];
    this.url=Global.url;

  }
  ngOnInit(): void {
    this._route.params.subscribe(params=>{
      let id=params.id;

      this.getProject(id);
    })
  }
  
  getProject(id:any){
    this._projectService.getProject(id).subscribe(
      response=>{
        this.project=response.project;
      },
      error=>{
        console.log(<any>error)
      }
    );
  }
  onSubmit(form:any){
    this._projectService.updateProject(this.project).subscribe(
      response=>{
        if(response.project){
          if(this.filestToUpload){
            this._uploadService.makeFileRequest(Global.url+"upload-image/"+response.project._id,[],this.filestToUpload,'image')
            .then((result:any)=>{
              this.saveProject=response.project;
  
              this.status='success';
  
            })
          }else{
            this.saveProject=response.project;
  
              this.status='success';
          }
          
        }
      },
      error=>{
        console.log(<any>error);
      }

    )
  }
  fileChangeEvent(fileInput:any){
    this.filestToUpload=<Array<File>>fileInput.target.files;

  }
}
