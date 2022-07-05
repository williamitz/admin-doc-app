import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutRoutingModule } from './layouts/admin-layout/admin-layout-routing.module';
import { AuthLayoutRoutingModule } from './layouts/auth-layout/auth-layout-routing.module';
// import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const app_routes: Routes = [
  {
    path: '',
    redirectTo: '/admin',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent },
  // {
  //   path: 'auth',
  //   component: AuthLayoutComponent
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(app_routes),
    AdminLayoutRoutingModule,
    AuthLayoutRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
