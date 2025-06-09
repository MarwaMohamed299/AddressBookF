import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-department',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-department.component.html',
  styleUrl: './add-department.component.css'
})
export class AddDepartmentComponent {
  @Input() department: any = { id: '', name: '' };
  @Output() save = new EventEmitter<any>();
  @Output() cancel = new EventEmitter<void>();

   isVisible = false;
  
//   public get isVisible() {
//     return this._isVisible;
//   }
//   public set isVisible(value) {
//     this._isVisible = value;
//   }
//   newDepartment = { name: '' };

//   open() {
//     this.isVisible = true;
//     this.newDepartment.name = '';
//   }

//   close() {
//     this.isVisible = false;
//     this.cancel.emit();
//   }

// onSubmit() {
//   this.save.emit(this.newDepartment); 
//   this.isVisible = false;
// }

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
