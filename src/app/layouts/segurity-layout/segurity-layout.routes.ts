import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoleComponent } from './role/role.component';
import { UserComponent } from './user/user.component';
import { RolefrmComponent } from './rolefrm/rolefrm.component';
import { UserfrmComponent } from './userfrm/userfrm.component';


const _routes: Routes = [
  {
    path: '',
    component: RoleComponent
  },
  {
    path: 'roles',
    component: RoleComponent
  },
  {
    path: 'crear-rol',
    component: RolefrmComponent
  },
  {
    path: 'crear-usuario',
    component: UserfrmComponent
  },
  {
    path: 'usuarios',
    component: UserComponent
  }
]

@NgModule({
  imports: [ RouterModule.forChild(_routes) ],
  exports: [RouterModule],
})
export class SegurityLayoutRoutesModule { }
