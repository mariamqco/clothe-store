import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { Page404Component } from './components/page404/page404.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ClientFormComponent } from './components/client-form/client-form.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ClientRegisterComponent } from './components/client-register/client-register.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ProductsComponent } from './components/products/products.component';
import { ClientRegisterUpdateComponent } from './components/client-register-update/client-register-update.component';
import { ProductRegisterUpdateComponent } from './components/product-register-update/product-register-update.component';
import { ProductSectionComponent } from './components/product-section/product-section.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Page404Component,
    ProductFormComponent,
    ClientFormComponent,
    HeaderComponent,
    FooterComponent,
    ClientRegisterComponent,
    AdminDashboardComponent,
    ClientsComponent,
    ProductsComponent,
    ClientRegisterUpdateComponent,
    ProductRegisterUpdateComponent,
    ProductSectionComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
