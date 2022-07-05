import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

const auth_child_routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  }
]

@NgModule({
  declarations: [
  ],
  imports: [RouterModule.forChild(auth_child_routes)],
  exports: [RouterModule],
  providers: [],
})
export class AuthRoutesModule { }
