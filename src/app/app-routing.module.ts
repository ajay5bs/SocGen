import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

const routes: Routes = [
  { path: 'registration', component: EmployeeRegistrationComponent },
  { path: 'details', component: EmployeeDetailsComponent },
  { path: '',   redirectTo: '/registration', pathMatch: 'full' }, // redirect to `EmployeeRegistrationComponent`
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
