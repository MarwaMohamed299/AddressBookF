import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdressAddDto } from '../DTOs/AddressAddDto';

@Component({
  selector: 'app-add-address',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './add-address.component.html',
  styleUrl: './add-address.component.css'
})
export class AddAddressComponent {
 @Input() jobs: any[] = [];
  @Input() departments: any[] = [];
  @Output() save = new EventEmitter<AdressAddDto>();
  @Output() cancel = new EventEmitter<void>();
  @ViewChild(AddAddressComponent) addModal!: AddAddressComponent;

  isVisible = false;
  newAddress: AdressAddDto = {
    mobileNumber: '',
    dateOfBirth: new Date(),
    fullName: '',
    address: '',
    email: '',
    photoPath: '',
    jobId: '',
    departmentId: '',
  };

  open() {
    this.isVisible = true;
    this.resetForm();
  }

  close() {
    this.isVisible = false;
    this.cancel.emit();
  }

  onSubmit() {
    this.save.emit(this.newAddress);
    this.isVisible = false;
  }

  private resetForm() {
    this.newAddress = {
      mobileNumber: '',
      dateOfBirth: new Date(),
      fullName: '',
      address: '',
      email: '',
      photoPath: '',
      jobId: '',
      departmentId: '',
    };
  }
}
