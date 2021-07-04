import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class SubareaService {

  constructor(private http: HttpClient, private authService: AuthService) {
    this.authService.genToken();
   }
  
  listSubArea():any{
    const config = { headers: new HttpHeaders().set('Content-Type', 'application/json')
                                               .set('Authorization','Bearer '+localStorage.getItem("myToken")) };
    return this.http.post(environment.baseEndpoint+environment.listSubArea,{},config);
  }  
}
