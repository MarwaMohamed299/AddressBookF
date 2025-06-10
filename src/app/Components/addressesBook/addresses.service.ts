import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdressReadDto } from './DTOs/AddressReadDto';
import { AdressFormModel } from './DTOs/AdressFormModel';

@Injectable({
  providedIn: 'root',
})
export class AddressesService {
  private apiUrl = 'http://localhost:5053/api/BookAddress';

  constructor(private http: HttpClient) {}

  getAddresses(): Observable<AdressReadDto[]> {
    return this.http.get<AdressReadDto[]>(this.apiUrl);
  }

  getAddress(id: string): Observable<AdressReadDto> {
    return this.http.get<AdressReadDto>(`${this.apiUrl}/${id}`);
  }

  deleteAddress(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  createAddress(address: AdressFormModel): Observable<any> {
    const formData = this.buildFormData(address);
    return this.http.post(this.apiUrl, formData);
  }

  updateAddress(address: AdressFormModel): Observable<any> {
    const formData = this.buildFormData(address);
    return this.http.put(`${this.apiUrl}/${address.id}`, formData);
  }

  private buildFormData(address: AdressFormModel): FormData {
    const formData = new FormData();

    const dateOnly =
      address.dateOfBirth instanceof Date
        ? address.dateOfBirth.toISOString().split('T')[0]
        : address.dateOfBirth;

    formData.append('mobileNumber', address.mobileNumber);
    formData.append('dateOfBirth', dateOnly);
    formData.append('fullName', address.fullName);
    formData.append('address', address.address);
    formData.append('email', address.email);
    formData.append('jobId', address.jobId);
    formData.append('departmentId', address.departmentId);

    if (address.photoFile) {
      formData.append('photo', address.photoFile);
    }

    return formData;
  }
  searchAddresses(criteria: any): Observable<AdressReadDto[]> {
    let params: any = {};

    if (criteria.fullName) params.fullName = criteria.fullName;
    if (criteria.age) params.age = criteria.age;
    if (criteria.mobileNumber) params.mobileNumber = criteria.mobileNumber;
    if (criteria.email) params.email = criteria.email;
    if (criteria.address) params.address = criteria.address;
    if (criteria.fromDate) params.birthDateFrom = criteria.fromDate;
    if (criteria.toDate) params.birthDateTo = criteria.toDate;
    if (criteria.jobId) params.jobId = criteria.jobId;
    if (criteria.departmentId) params.departmentId = criteria.departmentId;

    return this.http.get<AdressReadDto[]>(`${this.apiUrl}/search`, { params });
  }
  exportToExcel(): void {
    const url = `${this.apiUrl}/export`;
    this.http.get(url, { responseType: 'blob' }).subscribe((blob) => {
      const downloadURL = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = downloadURL;
      link.download = 'BookAddress.xlsx';
      link.click();
      window.URL.revokeObjectURL(downloadURL);
    });
  }
}
