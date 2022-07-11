import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ComponentsModule } from '../../components/components.module';
import { SegurityLayoutComponent } from './segurity-layout.component';
import { RoleComponent } from './role/role.component';
import { UserComponent } from './user/user.component';
import { RolefrmComponent } from './rolefrm/rolefrm.component';
import { UserfrmComponent } from './userfrm/userfrm.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule,
  ],
  declarations: [
    SegurityLayoutComponent,
    RoleComponent,
    UserComponent,
    RolefrmComponent,
    UserfrmComponent
  ],
})
export class SegurityLayoutModule { }
