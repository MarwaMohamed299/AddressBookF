import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DepartmentReadDto } from './DTOs/DepartmentReadDtos';
import { DepartmentAddDto } from './DTOs/DepartmentAddDto';
import { DepartmentEditDto } from './DTOs/DepartmentEditDto';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {

  private apiUrl = 'http://localhost:5053/api/Department';

  constructor(private http: HttpClient) { }

  // Get all departments
  getDepartments(): Observable<DepartmentReadDto[]> {
    return this.http.get<DepartmentReadDto[]>(this.apiUrl);
  }

  // Get single department by ID
  getDepartment(id: string): Observable<DepartmentReadDto> {
    return this.http.get<DepartmentReadDto>(`${this.apiUrl}/${id}`);
  }

  // Create new department
  createDepartment(id: string, department: { name: string; }): Observable<DepartmentAddDto> {
    return this.http.post<DepartmentAddDto>(this.apiUrl, department);
  }

  // Update existing department
  updateDepartment(id: string, department: { name: string }): Observable<DepartmentEditDto> {
    return this.http.put<DepartmentEditDto>(`${this.apiUrl}/${id}`, department);
  }

  // Delete department
  deleteDepartment(id: string): Observable<DepartmentReadDto> {
    return this.http.delete<DepartmentReadDto>(`${this.apiUrl}/${id}`);
  }
  
}
