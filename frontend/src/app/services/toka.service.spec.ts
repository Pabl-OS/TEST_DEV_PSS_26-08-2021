import { TestBed } from '@angular/core/testing';

import { TokaService } from './toka.service';

describe('TokaService', () => {
  let service: TokaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
