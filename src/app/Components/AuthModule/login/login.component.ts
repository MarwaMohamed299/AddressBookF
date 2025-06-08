import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthServiceService } from '../Service/auth-service.service';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { LogInDto } from '../AuthDTOs/LoginDTO';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule , RouterModule , ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
constructor(private userService:AuthServiceService, private router:Router){}
  userLogInForm: FormGroup = new FormGroup({
    Email : new FormControl('',[Validators.required,Validators.email]),
    Password : new FormControl('',[Validators.required, Validators.minLength(2),Validators.maxLength(100)])

  });

  onSubmit(e:Event) {
    e.preventDefault();

    var credentials = new LogInDto();
    credentials.Email=this.userLogInForm.controls['Email'].value ?? '';
    credentials.Password = this.userLogInForm.controls['Password'].value ?? '';

    this.userService.login(credentials).subscribe((token)=>{
      console.log(token);
      // this.userService.isLoggedIn$.next(true);
      this.router.navigateByUrl('/');
    })
  }
}
