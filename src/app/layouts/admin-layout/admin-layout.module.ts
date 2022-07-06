import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './admin-layout.component';
import { HomeComponent } from './home/home.component';
import { QuotesComponent } from './quotes/quotes.component';
import { ASharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AdminLayoutComponent, HomeComponent, QuotesComponent],

  imports: [CommonModule, RouterModule, ASharedModule],

  providers: [],
})
export class AdminLayoutModule {}
