import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-edit-job',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './edit-job.component.html',
  styleUrl: './edit-job.component.css'
})
export class EditJobComponent {
  @Input() Job: any = { id: '', name: '' };
  @Output() save = new EventEmitter<any>();
  @Output() cancel = new EventEmitter<void>();

  isVisible = false;

  open(Job: any) {
    this.Job = { ...Job };
    this.isVisible = true;
  }

  close() {
    this.isVisible = false;
    this.cancel.emit();
  }

  onSubmit() {
    this.save.emit(this.Job);
    this.isVisible = false;
  }
}
