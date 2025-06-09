import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/AuthModule/login/login.component';
import { RegisterComponent } from './Components/AuthModule/register/register.component';
import { UserDetailsComponent } from './Components/AuthModule/user-details/user-details.component';
import { HttpClientModule } from '@angular/common/http';
import { authGuard } from './Components/AuthModule/Guard/auth.guard';
import { AddDepartmentComponent } from './Components/Departments/add-department/add-department.component';
import { GetDepartmentsComponent } from './Components/Departments/get-departments/get-departments.component';
import { EditDepartmentComponent } from './Components/Departments/edit-department/edit-department.component';
import { AddJobComponent } from './Components/Jobs/add-job/add-job.component';
import { EditJobComponent } from './Components/Jobs/edit-job/edit-job.component';

export const routes: Routes = [

{ path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'user-details', component: UserDetailsComponent, canActivate: [authGuard] },
  { path: 'add-department', component:AddDepartmentComponent},
  { path: 'get-departments', component:GetDepartmentsComponent},
  { path: 'edit-department/:id', component:EditDepartmentComponent},
  { path: 'add-job', component:AddJobComponent},
  { path: 'get-job', component:AddJobComponent},
  { path: 'edit-job/:id', component:EditJobComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes) ],
  exports: [RouterModule],
})
export class AppRoutingModule {}