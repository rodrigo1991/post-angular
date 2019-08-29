import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainNavComponent } from './main-nav.component';


const routes: Routes = [
  {
    path: '',
    component: MainNavComponent,
    children:[
      {
        path: 'users',
        loadChildren: () => import('../../modules/user/user.module').then(mod => mod.UserModule)
      }
    ]
  },
  {
    path: 'users',
    loadChildren: () => import('../../modules/user/user.module').then(mod => mod.UserModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainNavRoutingModule { }
