import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjecService } from 'src/app/services/project.service';
import { UploadService } from 'src/app/services/upload.service';
import { Global } from 'src/app/services/global';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ProjecService,UploadService]
})
export class CreateComponent implements OnInit {

  public title: string;
  public project:Project;
  public status:string;
  public filestToUpload:Array<File>;
  public saveProject:any; 

  constructor(
    private _projectService:ProjecService,
    private _uploadService:UploadService
    ) { 
    this.title="Crear proyecto";
    this.project= new Project('','','','',2022,'','');
    this.status="";
    this.filestToUpload=[];
    

  }

  ngOnInit(): void {
  }

  onSubmit(form:any){
    this._projectService.saveProject(this.project).subscribe(
      Response=>{
        if(Response.project){

          //SUBIR LA IMAGEN
          this._uploadService.makeFileRequest(
            Global.url+"upload-image/"+Response.project._id,[],
            this.filestToUpload,
            'image')
          .then((result:any)=>{
            this.saveProject=Response.project;
            this.status="success";  
            console.log(this.saveProject)
            form.reset();
          }).catch(console.error);

          
        }else{
          this.status="failed";
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
