import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LogInDto } from '../AuthDTOs/LoginDTO';
import { TokenDTO } from '../AuthDTOs/TokenDTO';
import { RegisterDto } from '../AuthDTOs/RegisterDto';
import { GetUserDetailsDto } from '../AuthDTOs/GetUserDetailsDTO';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  public isLoggedIn$ = new BehaviorSubject<boolean>(false); 

constructor(private client: HttpClient) { }


    public login(credentials: LogInDto): Observable<TokenDTO> {
    return this.client.post<TokenDTO>(
      'http://localhost:5053/api/Users/Login',
      credentials
    )
    .pipe(
      tap((TokenDto) => {
        this.isLoggedIn$.next(true);
        localStorage.setItem('token', TokenDto.token);
      })
    );
  }

  public register(credentials:RegisterDto){
  return this.client.post(`http://localhost:5053/api/Users/Register`,credentials)
 }

  public GetUserDetails () : Observable<GetUserDetailsDto>
{
  return this.client.get<GetUserDetailsDto>('http://localhost:5053/api/Users/UserDetails');
}
}
