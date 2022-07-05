import { NgModule } from '@angular/core';
import { AdminLayoutComponent } from './admin-layout.component';
import { HomeComponent } from './home/home.component';
import { QuotesComponent } from './quotes/quotes.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AdminLayoutComponent,
    HomeComponent,
    QuotesComponent
  ],

  imports: [ RouterModule ],

  providers: [],
})
export class AdminLayoutModule { }

