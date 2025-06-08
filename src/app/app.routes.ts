import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/AuthModule/login/login.component';
import { RegisterComponent } from './Components/AuthModule/register/register.component';
import { UserDetailsComponent } from './Components/AuthModule/user-details/user-details.component';
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { 
    path: 'register', component : RegisterComponent},
    
  
  { 
    path: 'user-details', component: UserDetailsComponent
  },
  {
    path: 'departments',
    loadChildren: () => 
      import('./Components/departmentsModule/departments.module').then(
        m => m.DepartmentsModule
      )
  },
  {
    path: 'jobs',
    loadChildren: () => 
      import('./Components/jobs-module/jobs-module.module').then(
        m => m.JobsModuleModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}