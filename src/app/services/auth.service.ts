import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  genToken():any{
    const data = {
      "username": "freecode"
    }
    const config = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
    console.log('myToken1: ',localStorage.getItem("myToken"));
    if(localStorage.getItem("myToken") == undefined || localStorage.getItem("myToken") == null){
      this.http.post(environment.baseEndpoint+environment.auth, data, config).subscribe((d:any) => {
        console.log('Token: ', d);      
        localStorage.setItem("myToken", d.token);
        console.log('myToken2: ',localStorage.getItem("myToken"));
      });
    }

  }
}
