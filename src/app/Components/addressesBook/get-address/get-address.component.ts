import { Component, ViewChild } from '@angular/core';
import { EditAddressComponent } from '../edit-address/edit-address.component';
import { AddAddressComponent } from '../add-address/add-address.component';
import { DepartmentsService } from '../../Departments/departments.service';
import { JobsService } from '../../Jobs/jobs.service';
import { AddressesService } from '../addresses.service';
import { CommonModule } from '@angular/common';
import { AdressEditDto } from '../DTOs/AddressEditDto';
import { AdressAddDto } from '../DTOs/AddressAddDto';
import { AdressReadDto } from '../DTOs/AddressReadDto';

@Component({
  selector: 'app-get-address',
  standalone: true,
  imports: [EditAddressComponent,AddAddressComponent,CommonModule],
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

onAddressUpdate(updatedAddress: AdressReadDto): void {
  const editDto: AdressEditDto = {
    id: updatedAddress.id,
    mobileNumber: updatedAddress.mobileNumber,
    dateOfBirth: updatedAddress.dateOfBirth,
    fullName: updatedAddress.fullName,
    address: updatedAddress.address,
    email: updatedAddress.email,
    photoPath: updatedAddress.photoPath,
    jobId: updatedAddress.jobId,
    departmentId: updatedAddress.departmentId
  };
  
  this.addressService.updateAddress(updatedAddress.id, editDto)
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

}
