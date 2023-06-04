import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { HomePagesComponent } from './pages/home-pages/home-pages.component';

const routes: Routes = [
  {
    path:'',component:HomeLayoutComponent,children:[
      {path:'',component:HomePagesComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
