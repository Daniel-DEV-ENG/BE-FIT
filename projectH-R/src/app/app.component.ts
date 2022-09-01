import { Component } from '@angular/core';
import{HttpClient,HttpResponse} from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projectH-R';
  data:any
  readonly ROOT_URL: any;
constructor(private httpclient:HttpClient ){
this.ROOT_URL="http://localhost:3000"

}
get(url: string)
{ return this.httpclient.get('${this.ROOT_URL}/${url}')
  //   observe:"events"
  // }).subscribe((data)=>
  // {
  //   console.log(data);
  // } )

}
post(url: string,paylaod:object){
  return this.httpclient.post('${this.ROOT_URL}/${url}',paylaod)
}

patch(url: String,paylaod:object){
  return this.httpclient.patch('${this.ROOT_URL}/${url}',paylaod)
}

delete(url:string){
this.httpclient.delete('${this.ROOT_URL}/${url}')
}


}
