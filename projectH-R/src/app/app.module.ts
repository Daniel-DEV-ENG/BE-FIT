
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http'
import {NgbPaginationModule, NgbAlertModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SectionComponent } from './section/section.component';
import { FormsModule, NgModel } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms'
import { NgForm} from '@angular/forms';
import { sectionservice } from './section/sectionservice';
import { CompanyComponent } from './company/company.component';
import { EmployeeComponent } from './employee/employee.component';
import { AdviceComponent } from './advice/advice.component';
import { VacationsComponent } from './vacations/vacations.component';
import { ResignationComponent } from './resignation/resignation.component';
import { GiftsComponent } from './gifts/gifts.component';
import{EmployeeService}from'./employee.service'
import { from } from 'rxjs';
import{ ActivatedRoute, ActivatedRouteSnapshot, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component'
import{OwlModule} from'ngx-owl-carousel';
import { HeaderComponent } from './header/header.component'

@NgModule({
  declarations: [
    AppComponent,
    SectionComponent,
    CompanyComponent,
    EmployeeComponent,
    AdviceComponent,
    VacationsComponent,
    ResignationComponent,
    GiftsComponent,
    HomeComponent,
    ProfileComponent,
    AboutComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbPaginationModule,
    NgbAlertModule,
    ReactiveFormsModule,
    OwlModule,
    RouterModule.forRoot([
//define root page :
{path:'section',component:SectionComponent } ,
{path:'employee',component:EmployeeComponent},
{path:'gifts',component:GiftsComponent},
{path:'resigation',component:ResignationComponent},
{path:'vacation',component:VacationsComponent},
{path:'company',component:CompanyComponent},
{path:'',component:HeaderComponent},
{path:'/home',component:HomeComponent},
{path:'employee/:id',component:ProfileComponent},
{}
    ])

    ],
  providers: [
   EmployeeService,
    
  ],
  bootstrap: [AppComponent,SectionComponent]
})
export class AppModule { }
function routes(routes: any): any {
  throw new Error('Function not implemented.');
}

