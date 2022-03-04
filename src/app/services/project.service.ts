import { Injectable } from "@angular/core";
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from "rxjs/observable";
import { Project } from "../models/project";
import {Global} from './global';


@Injectable()
    export class ProjecService{
        public url:string;
        constructor(
            private _http:HttpClient
            ){
            this.url=Global.url;
        }
        
        testService(){
            return 'Probando el servicio de angular';
        }
    }
    
