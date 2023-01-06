import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './MyComponentFolder/login/login.component';
import { SignupComponent } from './MyComponentFolder/signup/signup.component';

// const routes: Routes = [];
const routes: Routes = [{ path: 'Login', component:LoginComponent},{path:'SignUp',component: SignupComponent}];
//mentioning the paths and corresponding components
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
