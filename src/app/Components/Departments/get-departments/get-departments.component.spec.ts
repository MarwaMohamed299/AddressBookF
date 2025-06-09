import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDepartmentsComponent } from './get-departments.component';

describe('GetDepartmentsComponent', () => {
  let component: GetDepartmentsComponent;
  let fixture: ComponentFixture<GetDepartmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetDepartmentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetDepartmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
