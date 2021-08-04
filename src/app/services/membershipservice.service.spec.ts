import { TestBed } from '@angular/core/testing';

import { MembershipserviceService } from './membershipservice.service';

describe('MembershipserviceService', () => {
  let service: MembershipserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MembershipserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
