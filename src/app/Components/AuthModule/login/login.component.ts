import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouteConfigLoadEnd, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule , RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
