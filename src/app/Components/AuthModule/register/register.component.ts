import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthServiceService } from '../Service/auth-service.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule , RouterModule , CommonModule , ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
constructor(private userService: AuthServiceService,private router : Router){}
  userRegisterForm: FormGroup = new FormGroup({
    userName: new FormControl(
      '',
      Validators.maxLength(30) && Validators.minLength(3) && Validators.required
    ),
    Email: new FormControl('', [Validators.email, Validators.required]),
    Password: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(30),
      Validators.pattern('^[a-zA-Z0-9]+$'),
    ]),
  });

  onSubmit() {
    console.warn(this.userRegisterForm.value);

    if (this.userRegisterForm.valid)
    {
      this.userService.register(this.userRegisterForm.value).subscribe({
        next: response => {
          console.log('Registration successful', response);
          this.router.navigateByUrl('/');
        },
        error: error => {
          console.error('Error in registeration', error);
          console.log (error);
        }
      });
    }
  }
}
