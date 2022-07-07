import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuotesLayoutComponent } from './quotes-layout.component';

const _routes: Routes = [
  {
    path: 'quotes',
    component: QuotesLayoutComponent,
    loadChildren: () =>
      import('./quotes-layout.routes').then((m) => m.QuotesRoutesModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(_routes)],
  exports: [RouterModule],
})
export class QuotesLayoutRoutingModule {}
