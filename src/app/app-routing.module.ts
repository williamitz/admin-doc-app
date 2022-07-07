import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutRoutingModule } from './layouts/admin-layout/admin-layout-routing.module';
import { AuthLayoutRoutingModule } from './layouts/auth-layout/auth-layout-routing.module';
// import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ConfigLayoutRoutingModule } from './layouts/config-layout/config-layout-routing.module';
import { QuotesLayoutRoutingModule } from './layouts/quotes-layout/quotes-layout-routing.module';

const app_routes: Routes = [
  {
    path: '',
    redirectTo: '/admin',
    pathMatch: 'full',
  },

  // {
  //   path: 'admin',
  //   loadChildren: () =>
  //     import('./layouts/admin-layout/admin-layout.module').then(
  //       (m) => m.AdminLayoutModule
  //     ),
  // },

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
    AuthLayoutRoutingModule,
    ConfigLayoutRoutingModule,
    QuotesLayoutRoutingModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
