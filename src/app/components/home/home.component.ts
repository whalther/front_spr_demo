import { Component, OnInit, ViewChild, } from '@angular/core';
import { JobCrudService } from '../../services/job-crud.service';
import { Router} from '@angular/router';

import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('modelIntentTemplate')

  dtOptions: DataTables.Settings = {};
  dtElement: DataTableDirective | any;
  dtTrigger: Subject<any> = new Subject<any>();

  employees:any = [];
  showEditComponent = false;
  showCreateComponent = false;
  showDetailComponent = false;
  constructor(private jcService : JobCrudService, private router: Router) { 
    this.listEmployees();
  }

  ngOnInit() { 
    this.dtOptions = {
      paging: true,
      pageLength: 5,
      processing: true,
      /*language: { url: '../../assets/idioma_datatables.txt' },*/
    };    
    this.rerender();   
  }
  ngAfterViewInit(): void {
    this.dtTrigger.next();    
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
  rerender(): void {
    // if(this.dtElement && this.dtElement.dtInstance){
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Se destruye la datatable
      dtInstance.destroy();
      // Se vuelve a generar
      this.dtTrigger.next();
    });
    // }
  }

  listEmployees(){
    this.jcService.listEmployees().subscribe(q => {
      this.employees = q.data.Empleados;           
      if(q.data.Empleados.length > 0){
        this.goToJobDetail(0);
      }
      console.log(q);
    });  
  }

  goToJobDetail(i){    
    this.showEditComponent = false;
    this.showCreateComponent = false;
    this.showDetailComponent = true;
    this.jcService.selectJob(this.employees[i]);
  }
  goToCreateJob(){
    this.showEditComponent = false;
    this.showCreateComponent = true;
    this.showDetailComponent = false;
  }
  goToEditJob(i){
    this.showEditComponent = true;
    this.showCreateComponent = false;
    this.showDetailComponent = false;
    this.jcService.selectJob(this.employees[i]);
  }
}
