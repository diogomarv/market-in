import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { UserLoginComponent } from './user-auth/user-login/user-login.component';
import { UserRegistrationComponent } from './user-auth/user-registration/user-registration.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'user/login', component: UserLoginComponent},
  {path: 'user/registration', component: UserRegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
