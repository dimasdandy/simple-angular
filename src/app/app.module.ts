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
import { HttpClientModule } from '@angular/common/http';
import { ListuserComponent } from './components/listuser/listuser.component';
import { CurrencyComponent } from './components/currency/currency.component';
import { FormComponent } from './components/form/form.component';
import { TokenComponent } from './components/token/token.component';
import { LoadingcircleComponent } from './components/loadingcircle/loadingcircle.component';
import { EmailComponent } from './components/email/email.component';

//#endregion


//#region MODULE

@NgModule
(
    {
        declarations:
        [
            AppComponent,
            SigninComponent,
            HomeComponent,
            ListuserComponent,
            CurrencyComponent,
            FormComponent,
            TokenComponent,
            LoadingcircleComponent,
            EmailComponent
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


//#region CLASS

export class AppModule
{

}

//#endregion