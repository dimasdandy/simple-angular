//#region IMPORT

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrencyComponent } from './components/currency/currency.component';
import { EmailComponent } from './components/email/email.component';
import { FormComponent } from './components/form/form.component';
import { HomeComponent } from './components/home/home.component';
import { ListuserComponent } from './components/listuser/listuser.component';
import { SigninComponent } from './components/signin/signin.component';
import { TokenComponent } from './components/token/token.component';

//#endregion


//#region ROUTES

const routes: Routes =
[
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
        path: "listuser",
        component: ListuserComponent
    },
    {
        path: "currency",
        component: CurrencyComponent
    },
    {
        path: "form",
        component: FormComponent
    },
    {
        path: "token",
        component: TokenComponent
    },
    {
        path: "email",
        component: EmailComponent
    }
];

//#endregion


//#region MODULE

@NgModule
(
    {
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    }
)
export class AppRoutingModule
{

}

//#endregion