import { TestBed } from '@angular/core/testing';

import { JobCrudService } from './job-crud.service';

describe('JobCrudService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JobCrudService = TestBed.get(JobCrudService);
    expect(service).toBeTruthy();
  });
});
