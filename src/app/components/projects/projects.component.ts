import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjecService } from 'src/app/services/project.service';
import { Global } from 'src/app/services/global';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers:[ProjecService]
})
export class ProjectsComponent implements OnInit {
  public projects:Project[];
  public url:string;

  constructor(
    private _projectService:ProjecService
  ) {
    this.projects=[];
    this.url=Global.url;
   }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(){
    this._projectService.getProjects().subscribe(
      response=>{
        this.projects=response.projects;
      },
      error=>{
        console.log(error);
      }

    );
  }

}
