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
  @Output() save = new EventEmitter<{ address: AdressReadDto; photoFile?: File }>();
  @Output() cancel = new EventEmitter<void>();

  isVisible = false;
  newAddress: AdressReadDto = {
    id: '',
    mobileNumber: '',
    dateOfBirth: new Date(),
    fullName: '',
    address: '',
    email: '',
    photoPath: '',
    jobId: '',
    departmentId: '',
  };

  photoFile?: File;

  open(address: AdressReadDto) {
    this.newAddress = { ...address };
    this.photoFile = undefined;
    this.isVisible = true;
  }

  close() {
    this.isVisible = false;
    this.cancel.emit();
  }

  onFileSelected(event: any) {
    if (event.target.files && event.target.files.length > 0) {
      this.photoFile = event.target.files[0];
    }
  }

  onSubmit() {
    this.save.emit({ address: this.newAddress, photoFile: this.photoFile });
    this.isVisible = false;
  }
  
}
