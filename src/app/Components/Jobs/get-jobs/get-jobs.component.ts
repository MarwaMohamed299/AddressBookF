import { Component, ViewChild } from '@angular/core';
import { JobReadDto } from '../JobDTOs/JobReadDto';
import { EditJobComponent } from '../edit-job/edit-job.component';
import { AddJobComponent } from '../add-job/add-job.component';
import { JobsService } from '../jobs.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-get-jobs',
  standalone: true,
  imports: [CommonModule, EditJobComponent, AddJobComponent],
  templateUrl: './get-jobs.component.html',
  styleUrl: './get-jobs.component.css'
})
export class GetJobsComponent {
  Jobs: JobReadDto[] = [];
  selectedJob!: JobReadDto;
  newJob: JobReadDto = { id:'', name: ''}

  @ViewChild(EditJobComponent) editModal!: EditJobComponent;
  @ViewChild(AddJobComponent) addModal!: AddJobComponent;

  constructor(private JobsService: JobsService) {}

  ngOnInit(): void {
    this.loadJobs();
  }

  loadJobs(): void {
    this.JobsService.getJobs().subscribe(
      Jobs => this.Jobs = Jobs
    );
  }

  addJob(Job: JobReadDto): void {
    this.addModal.open(Job)
  }

  selectJob(Job: JobReadDto): void {
    this.selectedJob = { ...Job };
  }

  editJob(Job: JobReadDto): void {
    this.editModal.open(Job);
  }

  onJobUpdate(Job: JobReadDto): void {
    this.JobsService.updateJobs(Job.id, { name: Job.name })
      .subscribe(() => this.loadJobs());
  }
 onJobAdd(Job: JobReadDto): void {
    this.JobsService.createJobs(Job.id, { name: Job.name })
      .subscribe(() => this.loadJobs());
  }
  confirmDelete(): void {
    this.JobsService.deleteJobs(this.selectedJob.id)
      .subscribe(() => this.loadJobs());
  }
}
