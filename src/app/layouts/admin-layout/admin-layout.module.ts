import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './admin-layout.component';
import { HomeComponent } from './home/home.component';
import { QuotesComponent } from './quotes/quotes.component';

import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [AdminLayoutComponent, HomeComponent, QuotesComponent],

  imports: [CommonModule, RouterModule, ComponentsModule],

  providers: [],
})
export class AdminLayoutModule {}
