import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdressFormModel } from '../DTOs/AdressFormModel';

type NewType = AdressFormModel;

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
  @Output() save = new EventEmitter<AdressFormModel>();
  @Output() cancel = new EventEmitter<void>();
  @ViewChild(AddAddressComponent) addModal!: AddAddressComponent;

  isVisible = false;
  newAddress: NewType = new AdressFormModel();
  todayString: string = '';

ngOnInit(): void {
  const today = new Date();
  this.todayString = today.toISOString().split('T')[0];
}
  open() {
    this.isVisible = true;
    this.resetForm();
  }

  close() {
    this.isVisible = false;
    this.cancel.emit();
  }

  onSubmit() {
    console.log('Submitting:', this.newAddress);
    this.save.emit(this.newAddress);
    this.isVisible = false;
  }

  onPhotoSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.newAddress.photoFile = file;
    }
  }

  private resetForm() {
    this.newAddress = new AdressFormModel();
  }
}
