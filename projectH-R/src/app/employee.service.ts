import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { DataService } from './data.service';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService extends DataService {
  //baseurl: string = "http://localhost:3000/api/employe";
  

  constructor( http:HttpClient ) {
    super("http://localhost:3000/api/employe",http)
   }
  //want to inherrtens all methods from data service
  
}
 



