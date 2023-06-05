import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { HomePagesComponent } from './pages/home-pages/home-pages.component';
import { DetailComponent } from './pages/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeLayoutComponent,
    AdminLayoutComponent,
    HomePagesComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
