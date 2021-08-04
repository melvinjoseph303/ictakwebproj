import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewacademicmembersComponent } from './viewacademicmembers.component';

describe('ViewacademicmembersComponent', () => {
  let component: ViewacademicmembersComponent;
  let fixture: ComponentFixture<ViewacademicmembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewacademicmembersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewacademicmembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
