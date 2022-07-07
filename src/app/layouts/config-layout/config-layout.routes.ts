import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypeDocComponent } from './type-doc/type-doc.component';
import { TypeDocfrmComponent } from './type-docfrm/type-docfrm.component';

const _routes: Routes = [
  {
    path: '',
    component: TypeDocComponent,
  },

  {
    path: 'lista-documentos',
    component: TypeDocComponent,
  },

  {
    path: 'nuevo',
    component: TypeDocfrmComponent,
  },

  {
    path: 'editar/:id',
    component: TypeDocfrmComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(_routes)],
  exports: [RouterModule],
  declarations: [],
  providers: [],
})
export class ConfigRoutesModule {}
