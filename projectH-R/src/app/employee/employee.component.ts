import { HttpClient } from '@angular/common/http';
import { EmployeeService } from './../employee.service';
import { Component, Injectable, Input, OnInit } from '@angular/core';

import { ThrowStmt } from '@angular/compiler';
import{Employee}from"./employeescehma"
import { Observable } from 'rxjs';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { throwError } from 'rxjs';

@Component({
  selector: 'employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
@Injectable()
export class EmployeeComponent implements OnInit  {
  public data:any = [];
  click=false;
  message=""
  click1=false;
   employee: Employee={
  
    name:'' ,
    salary:0,
    email:"",
    password:"",
    age:0,
    position:"",
    gender:"",
    Experience:""

  };
  submitted = false; 


  constructor(private service:EmployeeService,
    private http:HttpClient,
    private formBuilder: FormBuilder,
    private _route : ActivatedRoute,
    private router : Router
    
    ) {
      

    }


    ngOnInit() {
    //   //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // //   //Add 'implements OnInit' to the class.
    // const id: number = this._route.snapshot.params.get(['id'])
    //   this.getEmployeeById( this._route.snapshot.params.get(['id']))
     this.getEmployeeById(this._route.snapshot.params.id);
   
     }



  getEmployee()//:Observable<employee[]>
  {
   this.service.getAll()
    .subscribe(employees=>{
     this.data=employees

   },error=>{
     alert("unexpeted error occured");
     console.log(error);
   }) 
  }
  
  getEmployeeById(id:string)//:Observable<employee[]>
  {
   this.service.getById(id)
    .subscribe(employee=>{
     this.data=employee

   },error=>{
     alert("unexpeted error occured");
     console.log(error);
   }) 
  }
  addEmployee() 
  {
    var data = {

      name: this.employee.name,
      salary: this.employee.salary,
      email: this.employee.email,
      password: this.employee.password,
      age: this.employee.age,
      position:this.employee.position,
      gender:this.employee.gender,
      Experience:this.employee.Experience,
    
    };
    this.service.add(data)
      .subscribe(
        response => {
          console.log(response)
          //this.data.splice(0,0,this.employee)
          this.submitted = true
        },
        (error:Response) => {
          if(error.status===400)
          alert("unexpeted error occured");
          console.log(error);
        });   }
      
      
      updateEmployee(data:any){
      const  update ={
        
      name: this.employee.name,
      salary: this.employee.salary,
      email: this.employee.email,
      password: this.employee.password,
      age: this.employee.age,
      position:this.employee.position,
      gender:this.employee.gender,
      Experience:this.employee.Experience,
      

      }
  this.service.update(this.employee.id,update).subscribe(
  updatedEmployee=>{
  console.log(updatedEmployee )
  this.employee=data
},error=>{
  alert("unexpeted error occured");
  console.log(error);
})    }

updated(): void {
  this.service.update(this.employee.id, this.employee)
    .subscribe(
      response => {
        console.log(response);
        this.message = 'The tutorial was updated successfully!';
      },
      error => {
        console.log(error);
      });
}

      // dEmployee(input:HTMLInputElement) 
      // {
      //   let employee = {name:input.value}
      //   input.value=''
      //   this.http.post<any>('${baseUrl}/${id}',JSON.stringify(employee))
      //     .subscribe(
      //       data => {
      //         this.data = data
      //         console.log(data)
      //         this.data.splice(0,0,employee)
      //       }
      //     )
      //     }
      deleteEmployee(id:string ) {
        const i =this.employee;
        if(confirm('Are you sure to delete??'))
        this.service.delete(this.employee.id)
          .subscribe(
            response => {
              console.log(response);
              let index = this.data.indexOf(id)
              this.data.splice(id,1)
              
                
                
            },
          (error:Response) => {
            if(error.status===404)
            alert("the employee already deleted")
              /////في حال دخل المستخدم id موظف مو موجود
              else{
              alert("unexpeted error occured");
              console.log(error);
            }});
      }
      getsection(){
        this.http.get('http://localhost:3000/api/section/')
        .subscribe(response=>{
         this.data=response
    
       },error=>{
         alert("unexpeted error occured");
         console.log(error);
       }) 

      }
  onclick(){
    this.click=!this.click
  }
  onclick1(){
    this.click1=!this.click1
  }
}
