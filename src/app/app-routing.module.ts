//#region IMPORT

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { SigninComponent } from './components/signin/signin.component';

//#endregion


//#region ROUTES

const routes: Routes = [
  {
    path: "",
    redirectTo: "/",
    pathMatch: "full"
  },
  {
    path: "",
    component: SigninComponent
  },
  {
    path: "signin",
    component: SigninComponent
  },
  {
    path: "home/:username",
    component: HomeComponent
  },
  {
    path: "product",
    component: ProductComponent
  }
];

//#endregion


//#region MODULE

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//#endregion