import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout.component';

const admin_routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    loadChildren: () => import('./admin-layout.routes').then( (m) => m.AdminRoutesModule )
  }
]

@NgModule({
  imports: [RouterModule.forChild(admin_routes)],
  exports: [RouterModule],
  declarations: [],
  providers: [],
})
export class AdminLayoutRoutingModule { }
