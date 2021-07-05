import { Component, OnInit } from '@angular/core';
import { AreaService } from 'src/app/services/area.service';
import { SubareaService } from 'src/app/services/subarea.service';
import { JobCrudService } from '../../services/job-crud.service';

@Component({
  selector: 'app-create-job',
  templateUrl: './create-job.component.html',
  styleUrls: ['./create-job.component.css']
})
export class CreateJobComponent implements OnInit {
  name;
  lastName;
  documentType = "1";
  documentNumber;

  created = false;
  areaSelected = 0;
  subAreaSelected;
  areas = [];
  subAreas = [];
  subAreasFilter = [];
  constructor(public jcService : JobCrudService, private areaService: AreaService, private subAreaService: SubareaService) { }

  ngOnInit() {
    this.listArea();    
  }

  createJob(){
    console.log(this.name);
    console.log(this.lastName);
    console.log(this.documentType);
    console.log(this.documentNumber);
    console.log(this.subAreaSelected);
    const employee = {
      "EmployeeName": this.name,
      "EmployeeLastName": this.lastName,
      "DocumentType": {
        "idDoc": parseInt(this.documentType)
      },
      "Document": this.documentNumber,
      "Subarea": {
        "idSubArea": parseInt(this.subAreaSelected)
      }
    }; 
    this.jcService.createEmployee(employee).subscribe(q => {
      console.log('Resultado:',q);
      if(q.data.Created){
        this.created = true;
      }else{
        alert('Se tuvo un inconveniente al intentar crear al empleado');
      }
    }); 
  } 

  updateAfterCreate(){
    window.location.reload();
  }

  listArea(){
    this.areaService.listArea().subscribe(q => {
      this.areas = q.data.Areas;    
      this.areaSelected = this.areas[0].idArea;   
      this.listSubArea();
    });  
  }

  listSubArea(){
    this.subAreaService.listSubArea().subscribe(q => {
      this.subAreas = q.data.SubAreas;  
      this.subAreaSelected = this.subAreas[0].idSubArea;   
      this.updateSubArea();
      console.log('SUB AREAS: ',q);
    });  
  }     
  updateSubArea(){
    this.subAreasFilter = this.subAreas.filter(x => x.area.idArea == this.areaSelected);
    this.subAreaSelected = this.subAreasFilter[0].idSubArea;   
  }

}
