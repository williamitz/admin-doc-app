import { NgModule } from '@angular/core';
import { QuotesLayoutComponent } from './quotes-layout.component';
import { VisitorTypeComponent } from './visitor-type/visitor-type.component';
import { VisitorTypefrmComponent } from './visitor-typefrm/visitor-typefrm.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [CommonModule, RouterModule, ComponentsModule],
  declarations: [
    QuotesLayoutComponent,
    VisitorTypeComponent,
    VisitorTypefrmComponent,
  ],
})
export class QuotesLayoutModule {}
