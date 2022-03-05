import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjecService } from 'src/app/services/project.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ProjecService]
})
export class CreateComponent implements OnInit {

  public title: string;
  public project:Project;
  public status:string;

  constructor(private _projectService:ProjecService) { 
    this.title="Crear proyecto";
    this.project= new Project('','','','',2022,'','');
    this.status="";

  }

  ngOnInit(): void {
  }

  onSubmit(form:any){
    this._projectService.saveProject(this.project).subscribe(
      Response=>{
        if(Response.project){
          this.status="success";
          form.reset();
        }else{
          this.status="failed";
        }
      },
      error=>{
        console.log(<any>error);
      }

    )
  }

}
