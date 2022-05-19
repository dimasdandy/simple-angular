//#region IMPORT

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResponseModel } from 'src/app/models/response.model';
import { TokenModel } from 'src/app/models/token.model';
import { UserLoginModel } from 'src/app/models/userlogin.model';
import { UserService } from 'src/app/services/user.service';

//#endregion


//#region COMPONENT

@Component
    (
        {
            selector: 'app-signin',
            templateUrl: './signin.component.html',
            styleUrls: ['./signin.component.sass']
        }
    )

//#endregion


//#region CLASS

export class SigninComponent implements OnInit {
    //#region VARIABLE

    public _modelUserLogin: UserLoginModel = new UserLoginModel();
    public _modelToken: TokenModel = new TokenModel();

    //#endregion


    //#region CONSTRUCTOR

    constructor(private route: Router, private _userService: UserService)
    {

    }

    //#endregion


    //#region INTIALIZATION

    ngOnInit(): void
    {

    }

    //#endregion


    //#region ONCLICK

    onClick(componentCurrent: SigninComponent): void {
        const modelUserLogin: UserLoginModel = new UserLoginModel();
        modelUserLogin.email = this._modelUserLogin.email;
        modelUserLogin.password = this._modelUserLogin.password;
        const modelResponseValidationEmail: ResponseModel = modelUserLogin.validateEmail();
        const modelResponseValidationPassword: ResponseModel = modelUserLogin.validatePassword();

        this._userService.postLogin
        (
            {
                success(modelResponse: ResponseModel): void
                {
                    if(modelResponse.HTTPResponseCode === "200")
                    {
                        if(modelResponse.Data !== undefined)
                        {
                            componentCurrent._modelToken = JSON.parse(modelResponse.Data)
                            alert(JSON.stringify(componentCurrent._modelToken));
                            componentCurrent.route.navigate(["home/" + componentCurrent._modelUserLogin.email]);
                        }
                    }

                },
                fail(modelResponse: ResponseModel): void
                {
                    if(modelResponse.HTTPResponseCode == "400" || modelResponse.HTTPResponseCode == "401")
                    {
                        componentCurrent._modelToken = JSON.parse(modelResponse.Data!);
                        alert("Whoopss something bad happens!");
                        componentCurrent.route.navigate(["signin"]);
                    }
                },
                signout(modelResponse: ResponseModel): void
                {
                    if(modelResponse.HTTPResponseCode === "400" || modelResponse.HTTPResponseCode === "401")
                    {
                        componentCurrent._modelToken = JSON.parse(modelResponse.Data!);
                        alert("Whoopss something bad happens!");
                        componentCurrent.route.navigate(["signin"]);
                    }
                }
            },
            this._modelUserLogin
        )
    }

    //#endregion
}

//#endregion
