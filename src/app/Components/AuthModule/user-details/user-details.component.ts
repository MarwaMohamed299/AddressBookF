import { Component } from '@angular/core';
import { AuthServiceService } from '../Service/auth-service.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {
userName: any;
email: any;
id : any;

constructor(private authServise : AuthServiceService , private router : Router) {}
 ngOnInit() {
 const token = localStorage.getItem('token');
  this.authServise.GetUserDetails().subscribe({
    next: (response) => {
      console.log('User details fetched successfully', response);
      this.userName = response.userName;  
      this.email = response.email;        
    },
    error: (error) => {
      console.error('Error fetching user details', error);
      this.router.navigateByUrl('/login');
    }
  });
 }
}
