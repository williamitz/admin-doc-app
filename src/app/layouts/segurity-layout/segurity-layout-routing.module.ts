import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SegurityLayoutComponent } from './segurity-layout.component';

const _routes: Routes = [
  {
    path: 'segurity',
    component: SegurityLayoutComponent,
    loadChildren: () => import('./segurity-layout.routes').then( (m)=> m.SegurityLayoutRoutesModule )
  }
]

@NgModule({
  imports: [RouterModule.forChild(_routes)],
  exports: [RouterModule],

})
export class SegurityLayoutRoutingModule { }
