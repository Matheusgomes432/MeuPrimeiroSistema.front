import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class Services {

  urlBase: string

  constructor(private http: HttpClient) 
  {
    this.urlBase = (`${environment.url}`);  
  }

  private createHeader(): HttpHeaders{
    var headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
    return new HttpHeaders(headers);
  }


  Get(url:any): Observable<any>{
    return this.http.get(
      this.urlBase+`${url}`
    );
  }

  Post(body:any,url:any): Observable<any>{
    return this.http.post(
      this.urlBase+`${url}`,
      JSON.stringify(body),  
      {headers:this.createHeader()}
    );

  } 

}
