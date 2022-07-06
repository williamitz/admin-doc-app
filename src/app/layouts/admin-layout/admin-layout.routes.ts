import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuotesComponent } from './quotes/quotes.component';

const admin_child_routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'quotes',
    component: QuotesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(admin_child_routes)],
  exports: [RouterModule],
  declarations: [],
  providers: [],
})
export class AdminRoutesModule {}
