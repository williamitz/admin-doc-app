import { NgModule } from '@angular/core';
import { AuthLayoutComponent } from './auth-layout.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AuthLayoutComponent,
    LoginComponent
  ],
  imports: [
    RouterModule,
    NgSelectModule,
    ReactiveFormsModule,
  ],
  exports: [
  ],
  providers: [],
})
export class AuthLayoutModule { }
