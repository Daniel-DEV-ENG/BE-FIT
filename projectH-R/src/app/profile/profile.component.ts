import { Employee } from './../employee/employeescehma';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

employees ?: Employee[];
currentEmployee : Employee = {};
currentIndex = -1;
title = ''

  constructor(private route:ActivatedRoute,
    private service:EmployeeService) { }

  ngOnInit(): void {
    this.route.paramMap
   .subscribe(params=>{
     let id= + params.get('id')!
     console.log(id)
   })
  }
  
  retrieveEmployee(): void {
    this.service.getAll()
      .subscribe(
        data => {
          this.employees = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveEmployee();
    this.currentEmployee = {};
    this.currentIndex = -1;
  }
  setActiveTutorial(employee: Employee, index: number): void {
    this.currentEmployee = employee;
    this.currentIndex = index;
  }
  

}
