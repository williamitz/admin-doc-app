import { NgModule } from '@angular/core';
import { TypeDocComponent } from './type-doc/type-doc.component';
import { TypeDocfrmComponent } from './type-docfrm/type-docfrm.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ConfigLayoutComponent } from './config-layout.component';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [ConfigLayoutComponent, TypeDocComponent, TypeDocfrmComponent],
  imports: [CommonModule, RouterModule, ComponentsModule],
})
export class ConfigLayoutModule {}
