import { TestBed } from '@angular/core/testing';

import { SubareaService } from './subarea.service';

describe('SubareaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubareaService = TestBed.get(SubareaService);
    expect(service).toBeTruthy();
  });
});
