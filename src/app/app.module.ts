import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { HomePagesComponent } from './pages/home-pages/home-pages.component';
import { DasboardComponent } from './pages/admin/dasboard/dasboard.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ProductAddComponent } from './pages/product-add/product-add.component';
import { HeardComponent } from './components/heard/heard.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeLayoutComponent,
    AdminLayoutComponent,
    HomePagesComponent,
    DasboardComponent,
    PageNotFoundComponent,
    ProductAddComponent,
    HeardComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
