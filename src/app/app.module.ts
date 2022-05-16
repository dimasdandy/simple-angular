//#region IMPORT

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './components/root/app.component';
import { SigninComponent } from './components/signin/signin.component';
import { HomeComponent } from './components/home/home.component';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { CustompipeModule } from './functions/pipes/custompipe.pipe.module';
import { ProductComponent } from './components/product/product.component';
import { HttpClientModule } from '@angular/common/http';

//#endregion


//#region MODULE

@NgModule(
  {
  declarations:
  [
    AppComponent,
    SigninComponent,
    HomeComponent,
    ProductComponent
  ],
  imports:
  [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    CustompipeModule,
    HttpClientModule
  ],
  providers:
  [

  ],
  bootstrap:
  [
    AppComponent
  ]
}
)

//#endregion


//#region EXPORT

export class AppModule { }

//#endregion