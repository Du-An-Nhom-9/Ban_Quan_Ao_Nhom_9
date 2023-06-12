import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { HomePagesComponent } from './pages/home-pages/home-pages.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { DasboardComponent } from './pages/admin/dasboard/dasboard.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ProductAddComponent } from './pages/product-add/product-add.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AuthGuard } from './auth.guard';
import { ProductEditComponent } from './pages/product-edit/product-edit.component';
import { AdminProductComponent } from './pages/admin/admin-product/admin-product.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { CartComponent } from './pages/cart/cart.component';

const routes: Routes = [
  {
    path:'',component:HomeLayoutComponent,children:[
      {path:'',component:HomePagesComponent},
      {path:'signin',component:SigninComponent},
      {path:'cart/:id',component:CartComponent},
      {path:'detail/:id',component:ProductDetailComponent},
      {path:'signup',component:SignupComponent}
    ]
  },
  {
    path:'admin',component:AdminLayoutComponent, canActivate: [AuthGuard],children:[
      {path:'',redirectTo:'dashboard',pathMatch:'full'},
      {path:'dashboard',component:DasboardComponent},
      {path:'product',component:AdminProductComponent},
      {path:'dashboard/add',component:ProductAddComponent},
      {path:'dashboard/:id',component:ProductEditComponent},
    ]
  },
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
