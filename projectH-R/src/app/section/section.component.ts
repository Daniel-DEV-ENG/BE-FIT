import { AppComponent } from './../app.component';
import { Component, OnInit } from '@angular/core';
import { NgModule }      from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { sectionservice } from './sectionservice';
@Component({
  selector: 'section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
  providers:[sectionservice]
})
export class SectionComponent implements OnInit {


//   cotentMethod=[
// { id:1 ,name:'male' },
// { id:1 ,name:'female' },
//   ]
 
//   setName(x: any)
//   {
//     console.log('set Name is done succsesful',+x)
//   }
//   setdirectorSection(){

//    console.log('directorSection is set done') 
//   }
//   submit(f:any)
//   {
//     f.value;
//     console.log(f)
//   }

constructor(private section:sectionservice){

}
ngOnInit(){
  
  this.section.print();


}


}
 