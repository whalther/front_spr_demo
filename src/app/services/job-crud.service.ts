import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { SubareaService } from './subarea.service';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class JobCrudService {
  jobSelected:any= [];  
  subAreasFilter = [];
  subAreas = [];
  documentsEmp = [
    {
      "idDoc": 1,
      "docType": "DUI"
    },
    {
      "idDoc": 2,
      "docType": "NIT"
    }
  ];
  constructor(private http: HttpClient, public subAreaService: SubareaService, private authService: AuthService) {
    this.authService.genToken();
    this.listSubArea();    
  }
  

  listEmployees():any{
    const  parametros = new  HttpParams()
    .set('texto', "hola");
    const config = { headers: new HttpHeaders().set('Content-Type', 'application/json')
                                               .set('Authorization','Bearer '+localStorage.getItem("myToken")) };

    return this.http.post(environment.baseEndpoint+environment.listEmployees,{},config);
  }
  /*(jobTitle, jobDescription, jobDatePublish, jobDateExpiration):any{
    const data = {
      "jobTitlePosition": jobTitle,
      "jobDescription": jobDescription,
      "createdAt": jobDatePublish,
      "expiresAt": jobDateExpiration
    };
    const config = { headers: new HttpHeaders().set('Content-Type', 'application/json')
    .set('Access-Control-Allow-Origin', 'http://localhost:4200'),  withCredentials: false };

    return this.http.post(environment.baseEndpoint+environment.createJob ,data ,config);
  } */ 
  selectJob(job){
    this.jobSelected = job;
    console.log('myjob',this.jobSelected);
    this.updateSubArea();
  }
  updateSubArea(){
    console.log('Change');
    console.log('Selectted area: ',this.jobSelected.subarea.area.idArea);
    this.subAreasFilter = this.subAreas.filter(x => x.area.idArea == this.jobSelected.subarea.area.idArea);
  }  
  
  listSubArea(){
    this.subAreaService.listSubArea().subscribe(d => { 
      this.subAreas = d.data.SubAreas;   
      console.log('DATA',this.subAreas);  
    });     
  }

  updateEmployee():any{
    const data = {
      "idEmployee": this.jobSelected.idEmployee,
      "employeeName": this.jobSelected.employeeName,
      "employeeLastName": this.jobSelected.employeeLastName,
      "documentType": {
        "idDoc": parseInt(this.jobSelected.documentType.idDoc)
      },
      "document": this.jobSelected.document,
      "subarea": {
        "idSubArea": parseInt(this.jobSelected.subarea.idSubArea)
      }
    };
    console.log('New Data', JSON.stringify(data));
    //const config = { headers: new HttpHeaders().set('Content-Type', 'application/json'),  withCredentials: false };
    const config = { headers: new HttpHeaders().set('Content-Type', 'application/json')
                                               .set('Authorization','Bearer '+localStorage.getItem("myToken")) };    

    return this.http.post(environment.baseEndpoint+environment.updateEmployee ,data ,config);
  } 

  createEmployee(employee):any{
    const config = { headers: new HttpHeaders().set('Content-Type', 'application/json')
                                               .set('Authorization','Bearer '+localStorage.getItem("myToken")) };    

    return this.http.post(environment.baseEndpoint+environment.createEmployee ,employee ,config);
  }   
}
