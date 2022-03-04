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


  constructor(private _projectService:ProjecService) { 
    this.title="Crear proyecto";
    this.project= new Project('','','','',2022,'','');

  }

  ngOnInit(): void {
  }

  onSubmit(form:any){
    console.log(this.project);
  }

}
