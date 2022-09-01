import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NotFoundError } from 'admin-bro';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Employee } from './employee/employeescehma';
import { Inject } from '@angular/core';


@Injectable()
export class DataService {
  constructor(@Inject(String) private baseurl: string,private http:HttpClient) { }

getAll() :Observable<Employee[]>{
  
  return this.http.get<Employee[]>(this.baseurl).pipe(catchError(this.errorHandler),map(response=>response))
  

   } 

   errorHandler(error:HttpErrorResponse){
    return throwError(error.message || "there is error on data").pipe(map(response => response))

   }
  
 getById(id: any){
   return this.http.get(`${this.baseurl}/${id}`)
   .pipe(map(response => response));
 }

 add(resource:any){
   return this.http.post(this.baseurl +'/'+ 'creatEmployee', resource)
   .pipe(map(response => response));
 }

 delete(id: any){
   return this.http.delete("http://localhost:3000/api/employe/:id"+ id)
   .pipe(map(response => response));
 }

 update(id:any,resource:any){
   return this.http.put(this.baseurl + 'Employees' + '/' + id, id,resource)
   .pipe(map(response => response));
 }
//  private handleError(error:Response){
//    if(error.status===400)
//    return Observable.throw(new badInput(error))
//   if(error.status===404)
//   return Observable.throw(new NotFoundError()) 
  
//   return Observable.throw(new AppError(error));

//   }
}
