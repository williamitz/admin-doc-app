import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthLayoutComponent } from './auth-layout.component';

const auth_child_routes: Routes = [
  {
    path: 'auth',
    component: AuthLayoutComponent,
    loadChildren:() => import('./auth-layout.routes').then( (m) => m.AuthRoutesModule )
  }
]

@NgModule({
  imports: [ RouterModule.forChild(auth_child_routes) ],
  exports: [RouterModule],
  declarations: [],
  providers: [],
})
export class AuthLayoutRoutingModule { }
