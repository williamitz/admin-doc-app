import { NgModule } from '@angular/core';
import { AuthLayoutComponent } from './auth-layout.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AuthLayoutComponent,
    LoginComponent
  ],
  imports: [
    RouterModule
  ],
  exports: [
  ],
  providers: [],
})
export class AuthLayoutModule { }
