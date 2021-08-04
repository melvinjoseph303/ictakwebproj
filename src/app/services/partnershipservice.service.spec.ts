import { TestBed } from '@angular/core/testing';

import { PartnershipserviceService } from './partnershipservice.service';

describe('PartnershipserviceService', () => {
  let service: PartnershipserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PartnershipserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
