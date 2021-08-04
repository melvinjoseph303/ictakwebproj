import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporatemembershipcontactusformComponent } from './corporatemembershipcontactusform.component';

describe('CorporatemembershipcontactusformComponent', () => {
  let component: CorporatemembershipcontactusformComponent;
  let fixture: ComponentFixture<CorporatemembershipcontactusformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorporatemembershipcontactusformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorporatemembershipcontactusformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
