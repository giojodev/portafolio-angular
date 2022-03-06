import { Injectable } from "@angular/core";
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from "rxjs/observable";
import { Project } from "../models/project";
import {Global} from './global';


@Injectable()
    export class ProjecService{
        public url:string;
        public headers:any;
        constructor(
            private _http:HttpClient
            ){
            this.url=Global.url;
            this.headers=new HttpHeaders().set('Content-type','application/json');
        }
        
        testService(){
            return 'Probando el servicio de angular';
        }
        saveProject(project:Project):Observable<any>{
            let params=JSON.stringify(project);
            

            return this._http.post(this.url+'save-project',params,{headers:this.headers});
        }
    }
    
