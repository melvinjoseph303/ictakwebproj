import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporatemembershipregisternowformComponent } from './corporatemembershipregisternowform.component';

describe('CorporatemembershipregisternowformComponent', () => {
  let component: CorporatemembershipregisternowformComponent;
  let fixture: ComponentFixture<CorporatemembershipregisternowformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorporatemembershipregisternowformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorporatemembershipregisternowformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
