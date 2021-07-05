import { Component, OnInit } from '@angular/core';
import { JobCrudService } from '../../services/job-crud.service';
import { AreaService } from '../../services/area.service';

@Component({
  selector: 'app-edit-job',
  templateUrl: './edit-job.component.html',
  styleUrls: ['./edit-job.component.css']
})
export class EditJobComponent implements OnInit {
  edited = false;
  areas = [];
  areaEmpDefault;
  subAreas = [];
  subAreasFilter = [];
  subAreaEmpDefault;
  documents = [];
  documentEmpDefault;
  changeCombo = false;
  constructor(public jcService : JobCrudService, 
              public areaService: AreaService) { }

  ngOnInit() {
    this.listArea();
    this.setEmpDocumentDefault(); 
  }

  editJob(){
    this.jcService.updateEmployee().subscribe(q => {
      console.log(q);
      this.edited = true;
    });  
    console.log('Empleado', this.jcService.jobSelected);
  }  
  listArea(){
    this.areaService.listArea().subscribe(d => {   
      this.areas = d.data.Areas;
      this.areaEmpDefault = this.jcService.jobSelected.subarea.area.idArea;
      console.log('areas', d);
    }); 
  }
  setEmpDocumentDefault(){
      this.documentEmpDefault = this.jcService.jobSelected.documentType.idDoc;
      console.log('Document Default: '+this.documentEmpDefault);
  }
  updateSubArea(){
    console.log('Change');
    this.changeCombo = true;
    console.log('Selectted area: ',this.jcService.jobSelected.subarea.area.idArea);
    this.jcService.subAreasFilter = this.jcService.subAreas.filter(x => x.area.idArea == this.jcService.jobSelected.subarea.area.idArea);
  }
  updateAfterEdit(){
    window.location.reload();
  }
 
}
