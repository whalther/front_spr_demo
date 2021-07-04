import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobCrudService } from '../../services/job-crud.service';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent implements OnInit {
  paramsObj:any = [];
  constructor(private activeRoute: ActivatedRoute, public jcService : JobCrudService) { }

  ngOnInit() {
    this.activeRoute.queryParamMap.subscribe(params => {
      this.paramsObj = params;
    });
  }

}
