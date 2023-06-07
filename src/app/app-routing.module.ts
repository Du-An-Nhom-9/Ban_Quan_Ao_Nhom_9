import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { HomePagesComponent } from './pages/home-pages/home-pages.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { DasboardComponent } from './pages/admin/dasboard/dasboard.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ProductAddComponent } from './pages/product-add/product-add.component';

const routes: Routes = [
  {
    path:'',component:HomeLayoutComponent,children:[
      {path:'',component:HomePagesComponent}
    ]
  },
  {
    path:'admin',component:AdminLayoutComponent,children:[
      {path:'',redirectTo:'dashboard',pathMatch:'full'},
      {path:'dasboard',component:DasboardComponent},
      {path:'add',component:ProductAddComponent},
      {path:'product',component:DasboardComponent},
    ]
  },
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
