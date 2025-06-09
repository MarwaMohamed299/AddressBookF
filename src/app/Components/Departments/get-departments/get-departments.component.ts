import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DepartmentsService } from '../departments.service';
import { DepartmentReadDto } from '../DTOs/DepartmentReadDtos';
import { EditDepartmentComponent } from "../edit-department/edit-department.component";
import { AddDepartmentComponent } from "../add-department/add-department.component";

@Component({
  selector: 'app-get-departments',
  standalone: true,
  imports: [CommonModule, EditDepartmentComponent, AddDepartmentComponent],
  templateUrl: './get-departments.component.html',
  styleUrl: './get-departments.component.css'
})
export class GetDepartmentsComponent implements OnInit {
  departments: DepartmentReadDto[] = [];
  selectedDepartment!: DepartmentReadDto;
  newDepartment: DepartmentReadDto = { id:'', name: ''}


  @ViewChild(EditDepartmentComponent) editModal!: EditDepartmentComponent;
  @ViewChild(AddDepartmentComponent) addModal!: AddDepartmentComponent;

  constructor(private departmentsService: DepartmentsService) {}

  ngOnInit(): void {
    this.loadDepartments();
  }

  loadDepartments(): void {
    this.departmentsService.getDepartments().subscribe(
      departments => this.departments = departments
    );
  }

  addDepartment(department: DepartmentReadDto): void {
    this.addModal.open(department)
  }

  selectDepartment(department: DepartmentReadDto): void {
    this.selectedDepartment = { ...department };
  }

  editDepartment(department: DepartmentReadDto): void {
    this.editModal.open(department);
  }

  onDepartmentUpdate(department: DepartmentReadDto): void {
    this.departmentsService.updateDepartment(department.id, { name: department.name })
      .subscribe(() => this.loadDepartments());
  }
 onDepartmentAdd(department: DepartmentReadDto): void {
    this.departmentsService.createDepartment(department.id, { name: department.name })
      .subscribe(() => this.loadDepartments());
  }
  confirmDelete(): void {
    this.departmentsService.deleteDepartment(this.selectedDepartment.id)
      .subscribe(() => this.loadDepartments());
  }
}
