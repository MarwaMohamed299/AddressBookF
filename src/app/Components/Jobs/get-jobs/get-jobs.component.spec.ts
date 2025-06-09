import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetJobsComponent } from './get-jobs.component';

describe('GetJobsComponent', () => {
  let component: GetJobsComponent;
  let fixture: ComponentFixture<GetJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetJobsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
