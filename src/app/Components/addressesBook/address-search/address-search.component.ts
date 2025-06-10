import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { AddressesService } from '../addresses.service';
import { JobsService } from '../../Jobs/jobs.service';
import { DepartmentsService } from '../../Departments/departments.service';

@Component({
  selector: 'app-address-search',
  standalone: true,
  imports: [ FormsModule, CommonModule],
  templateUrl: './address-search.component.html',
  styleUrl: './address-search.component.css'
})
export class AddressSearchComponent {
 searchCriteria = {
  fullName: '',
  mobileNumber: '',
  email: '',
  age: '',
  address: '',
  fromDate: '',
  toDate: '',
  jobId: '',
  departmentId: ''
};

  jobs: any[] = [];  
  departments: any[] = [];
  addresses :any[] =[];
constructor(private jobsService: JobsService, private departmentsService: DepartmentsService ,private addressService:AddressesService) {}

ngOnInit(): void {
  this.loadJobs();
  this.loadDepartments();
}

loadJobs(): void {
  this.jobsService.getJobs().subscribe(
    jobs => this.jobs = jobs
  );
}

loadDepartments(): void {
  this.departmentsService.getDepartments().subscribe(
    departments => this.departments = departments
  );
}
onSearch() : void{
this.addressService.searchAddresses(this.searchCriteria).subscribe(
      addresses =>this.addresses = addresses
);
}


}
