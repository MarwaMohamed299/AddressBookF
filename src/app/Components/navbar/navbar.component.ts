import { Component, Input } from '@angular/core';
import { AuthServiceService } from '../AuthModule/Service/auth-service.service';
import { CommonModule, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
NavBarisLoggedIn =false;

@Input() userName :string ='';

constructor( private authService:AuthServiceService){}

ngOnInit(): void {

  this.authService.isLoggedIn$.subscribe((IsLoggedIn)=>
  this.NavBarisLoggedIn =IsLoggedIn
  )

}
}
