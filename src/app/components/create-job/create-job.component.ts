import { Component, OnInit } from '@angular/core';
import { JobCrudService } from '../../services/job-crud.service';

@Component({
  selector: 'app-create-job',
  templateUrl: './create-job.component.html',
  styleUrls: ['./create-job.component.css']
})
export class CreateJobComponent implements OnInit {
  jobTitle;
  jobDescription;
  jobDatePublish;
  jobDateExpiration;
  created = false;
  constructor(private jcService : JobCrudService) { }

  ngOnInit() {
  }
  createJob(){
    /*console.log(this.jobTitle);
    console.log(this.jobDescription);
    console.log(this.jobDatePublish);
    console.log(this.jobDateExpiration);    
    this.jcService.createJob(this.jobTitle, this.jobDescription, this.jobDatePublish, this.jobDateExpiration).subscribe(q => {
      console.log(q);
      this.created = true;
      this.jobTitle = ''
      this.jobDescription = '';
      this.jobDatePublish = '';
      this.jobDateExpiration = '';
      window.location.reload();
    }); */ 
  }  

}
