import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-department',
  standalone: true,
  imports: [CommonModule , FormsModule],
  templateUrl: './edit-department.component.html',
  styleUrl: './edit-department.component.css'
})
export class EditDepartmentComponent {
  @Input() department: any = { id: '', name: '' };
  @Output() save = new EventEmitter<any>();
  @Output() cancel = new EventEmitter<void>();

  isVisible = false;

  open(department: any) {
    this.department = { ...department };
    this.isVisible = true;
  }

  close() {
    this.isVisible = false;
    this.cancel.emit();
  }

  onSubmit() {
    this.save.emit(this.department);
    this.isVisible = false;
  }

}
