import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicmembershipComponent } from './academicmembership.component';

describe('AcademicmembershipComponent', () => {
  let component: AcademicmembershipComponent;
  let fixture: ComponentFixture<AcademicmembershipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcademicmembershipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicmembershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
