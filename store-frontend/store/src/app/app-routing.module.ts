import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientFormComponent } from './components/client-form/client-form.component';
import { ClientRegisterComponent } from './components/client-register/client-register.component';
import { ClientsComponent } from './components/clients/clients.component';
import { HomeComponent } from './components/home/home.component';
import { Page404Component } from './components/page404/page404.component';
import { ProductsComponent } from './components/products/products.component';
import { ClientRegisterUpdateComponent } from './components/client-register-update/client-register-update.component';
import { ProductRegisterUpdateComponent } from './components/product-register-update/product-register-update.component';
import { ProductSectionComponent } from './components/product-section/product-section.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'woman', component:ProductSectionComponent},
  {path:'men', component:ProductSectionComponent},
  {path:'lotion', component:ProductSectionComponent},
  {path:'accessories', component:ProductSectionComponent},
  {path:'for-you', component:ClientRegisterComponent},
  {path:'client-update/:id', component:ClientFormComponent},  
  {path:'admin-dashboard/clients', component:ClientsComponent},
  {path:'admin-dashboard/clients-register-update', component:ClientRegisterUpdateComponent},
  {path:'admin-dashboard/clients-register-update/:id', component:ClientRegisterUpdateComponent},
  {path:'admin-dashboard/products', component:ProductsComponent},
  {path:'admin-dashboard/products-register-update', component:ProductRegisterUpdateComponent},
  {path:'admin-dashboard/products-register-update/:id', component:ProductRegisterUpdateComponent},
  {path:'404', component:Page404Component},  
  {path:'**', redirectTo:'404', pathMatch: 'full'}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
