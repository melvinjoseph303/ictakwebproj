import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnershipformComponent } from './partnershipform.component';

describe('PartnershipformComponent', () => {
  let component: PartnershipformComponent;
  let fixture: ComponentFixture<PartnershipformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnershipformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnershipformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
