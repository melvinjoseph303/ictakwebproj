import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporatemembershipComponent } from './corporatemembership.component';

describe('CorporatemembershipComponent', () => {
  let component: CorporatemembershipComponent;
  let fixture: ComponentFixture<CorporatemembershipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorporatemembershipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorporatemembershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
