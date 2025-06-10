import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AdressAddDto } from '../DTOs/AddressAddDto';
import { AdressReadDto } from '../DTOs/AddressReadDto';
import { AdressEditDto } from '../DTOs/AddressEditDto';

@Component({
  selector: 'app-edit-address',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './edit-address.component.html',
  styleUrl: './edit-address.component.css'
})
export class EditAddressComponent {
  @Input() jobs: any[] = [];
  @Input() departments: any[] = [];
  @Output() save = new EventEmitter<AdressReadDto>();
  @Output() cancel = new EventEmitter<void>();
  
  isVisible = false;
  newAddress: AdressReadDto = {
    id:'',
    mobileNumber: '',
    dateOfBirth: new Date(),
    fullName: '',
    address: '',
    email: '',
    photoPath: '',
    jobId: '',
    departmentId: '',
  };

open(address: AdressReadDto) {  
  this.newAddress = { ...address };  
  this.isVisible = true;
}


  close() {
    this.isVisible = false;
    this.cancel.emit();
  }

  onSubmit() {
    this.save.emit(this.newAddress);
    this.isVisible = false;
  }

  
}
