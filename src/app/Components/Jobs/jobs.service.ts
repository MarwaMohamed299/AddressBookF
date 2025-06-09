import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JobReadDto } from './JobDTOs/JobReadDto';
import { JobAddDto } from './JobDTOs/JobAddDto';
import { JobEditDto } from './JobDTOs/JobEditDtos';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  private apiUrl = 'http://localhost:5053/api/Job';
  
    constructor(private http: HttpClient) { }
  
    // Get all Jovs
    getJobs(): Observable<JobReadDto[]> {
      return this.http.get<JobReadDto[]>(this.apiUrl);
    }
  
    // Get single Jobs by ID
    getJobById(id: string): Observable<JobReadDto> {
      return this.http.get<JobReadDto>(`${this.apiUrl}/${id}`);
    }
  
    // Create new Jobs
    createJobs(id: string, Jobs: { name: string; }): Observable<JobAddDto> {
      return this.http.post<JobAddDto>(this.apiUrl, Jobs);
    }
  
    // Update existing Jobs
    updateJobs(id: string, Jobs: { name: string }): Observable<JobEditDto> {
      return this.http.put<JobEditDto>(`${this.apiUrl}/${id}`, Jobs);
    }
  
    // Delete Jobs
    deleteJobs(id: string): Observable<JobReadDto> {
      return this.http.delete<JobReadDto>(`${this.apiUrl}/${id}`);
    }
    
  }
  

