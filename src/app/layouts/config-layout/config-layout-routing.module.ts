import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfigLayoutComponent } from './config-layout.component';

const _routes: Routes = [
  {
    path: 'configuration',
    component: ConfigLayoutComponent,
    loadChildren: () =>
      import('./config-layout.routes').then((m) => m.ConfigRoutesModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(_routes)],
  exports: [RouterModule],
  declarations: [],
  providers: [],
})
export class ConfigLayoutRoutingModule {}
