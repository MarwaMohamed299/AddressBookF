import { Component, ViewChild } from '@angular/core';
import { EditAddressComponent } from '../edit-address/edit-address.component';
import { AddAddressComponent } from '../add-address/add-address.component';
import { DepartmentsService } from '../../Departments/departments.service';
import { JobsService } from '../../Jobs/jobs.service';
import { AddressesService } from '../addresses.service';
import { CommonModule } from '@angular/common';
import { AdressAddDto } from '../DTOs/AddressAddDto';
import { AdressReadDto } from '../DTOs/AddressReadDto';
import { AdressFormModel } from '../DTOs/AdressFormModel';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-get-address',
  standalone: true,
  imports: [EditAddressComponent,AddAddressComponent,CommonModule,RouterModule],
  templateUrl: './get-address.component.html',
  styleUrl: './get-address.component.css'
})
export class GetAddressComponent {
  addresses: AdressReadDto[] = []
  selectedAddress!: AdressReadDto;
  jobs: any[] = [];
  departments: any[] = [];

  @ViewChild(EditAddressComponent) editModal!: EditAddressComponent;
  @ViewChild(AddAddressComponent) addModal!: AddAddressComponent;

  constructor(
    private addressService: AddressesService,
    private jobsService: JobsService,
    private departmentsService: DepartmentsService
  ) {}

  ngOnInit(): void {
    this.loadAddresses();
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


 loadAddresses(): void {
  this.addressService.getAddresses().subscribe(
    addresses => this.addresses = addresses
  );
}

openAddModal() {
  this.addModal.open();
}


onAddressAdd(newAddress: AdressAddDto) {
    console.log('Submitting:', newAddress);
  this.addressService.createAddress(newAddress)
    .subscribe(() => this.loadAddresses()); 
}



selectAddress(address: AdressReadDto): void {
  this.selectedAddress = address;
}

editAddress(address: AdressReadDto): void {
  this.editModal.open(address);
}

onAddressUpdate(data: { address: AdressReadDto; photoFile?: File }): void {
  const editDto: AdressFormModel = {
    id: data.address.id,
    mobileNumber: data.address.mobileNumber,
    dateOfBirth: data.address.dateOfBirth,
    fullName: data.address.fullName,
    address: data.address.address,
    email: data.address.email,
    photoPath: data.address.photoPath,
    jobId: data.address.jobId,
    departmentId: data.address.departmentId
  };

  this.addressService.updateAddress(editDto)
    .subscribe(() => this.loadAddresses());
}

confirmDelete(): void {
  this.addressService.deleteAddress(this.selectedAddress.id)
    .subscribe(() => this.loadAddresses());
}

getJobName(jobId: string): string {
  const job = this.jobs.find(j => j.id === jobId);
  return job ? job.name : '';
}

getDepartmentName(departmentId: string): string {
  const department = this.departments.find(d => d.id === departmentId);
  return department ? department.name : '';
}
getDefaultAddress(): AdressReadDto {
  return {
    id: '',
    mobileNumber: '',
    dateOfBirth: new Date(),
    fullName: '',
    address: '',
    email: '',
    photoPath: '',
    jobId: '',
    departmentId: ''
  };
}
exportToExcel(): void {
  this.addressService.exportToExcel();
}


}
