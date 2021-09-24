import { TestBed } from '@angular/core/testing';

import { RiskserviceService } from './riskservice.service';

describe('RiskserviceService', () => {
  let service: RiskserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RiskserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
