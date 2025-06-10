import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdressAddDto } from './DTOs/AddressAddDto';
import { AdressEditDto } from './DTOs/AddressEditDto';
import { AdressReadDto } from './DTOs/AddressReadDto';

@Injectable({
  providedIn: 'root'
})
export class AddressesService {

  private apiUrl = 'http://localhost:5053/api/BookAddress';

  constructor(private http: HttpClient) { }

  getAddresses(): Observable<AdressReadDto[]> {
    return this.http.get<AdressReadDto[]>(this.apiUrl);
  }

  getAddress(id: string): Observable<AdressReadDto> {
    return this.http.get<AdressReadDto>(`${this.apiUrl}/${id}`);
  }

  createAddress(address: AdressAddDto): Observable<AdressAddDto> {
    return this.http.post<AdressAddDto>(this.apiUrl, address);
  }
  

 updateAddress(id: string, address: AdressEditDto): Observable<AdressReadDto> {
  return this.http.put<AdressReadDto>(`${this.apiUrl}/${id}`, address);
}


  deleteAddress(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
