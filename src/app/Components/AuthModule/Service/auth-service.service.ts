import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LogInDto } from '../AuthDTOs/LoginDTO';
import { TokenDTO } from '../AuthDTOs/TokenDTO';
import { RegisterDto } from '../AuthDTOs/RegisterDto';
import { GetUserDetailsDto } from '../AuthDTOs/GetUserDetailsDTO';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  public isLoggedIn$ = new BehaviorSubject<boolean>(false);
  private apiUrl = 'http://localhost:5053/api/Users';

  constructor(private client: HttpClient) {}

  public login(credentials: LogInDto): Observable<TokenDTO> {
    return this.client.post<TokenDTO>(this.apiUrl, credentials).pipe(
      tap((TokenDto) => {
        this.isLoggedIn$.next(true);
        localStorage.setItem('token', TokenDto.token);
      })
    );
  }

  public register(credentials: RegisterDto) {
    return this.client.post(this.apiUrl, credentials);
  }

  public GetUserDetails(): Observable<GetUserDetailsDto> {
    return this.client.get<GetUserDetailsDto>(this.apiUrl);
  }
}
