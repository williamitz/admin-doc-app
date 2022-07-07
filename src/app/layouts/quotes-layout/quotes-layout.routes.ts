import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisitorTypeComponent } from './visitor-type/visitor-type.component';
import { VisitorTypefrmComponent } from './visitor-typefrm/visitor-typefrm.component';

const _routes: Routes = [
  {
    path: 'visitantes',
    component: VisitorTypeComponent,
  },
  {
    path: 'nuevo-visitante',
    component: VisitorTypefrmComponent,
  },

  {
    path: 'editar-visitante/:id',
    component: VisitorTypefrmComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(_routes)],
  exports: [RouterModule],
})
export class QuotesRoutesModule {}
