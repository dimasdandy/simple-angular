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
    public _booleanIsLoading: boolean = false;
    private _elementHTMLImgLoadingCircle: HTMLElement | null;

    //#endregion


    //#region CONSTRUCTOR

    constructor(private route: Router, private _userService: UserService)
    {
        this._elementHTMLImgLoadingCircle = document.getElementById("imageLoadingCircle");
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

        this._userService.postLogin
        (
            {
                success(modelResponse: ResponseModel): void
                {
                    modelResponse.MessageContent = modelResponseValidationEmail.MessageContent;
                    if(modelResponse.HTTPResponseCode === "200")
                    {
                        if(modelResponse.Data !== undefined)
                        {
                            componentCurrent._modelToken = JSON.parse(modelResponse.Data)
                            alert(modelResponse.MessageContent);
                            componentCurrent.route.navigate(["home/" + componentCurrent._modelUserLogin.email]);
                        }
                    }

                },
                fail(modelResponse: ResponseModel): void
                {
                    modelResponse.MessageContent = modelResponseValidationEmail.MessageContent;
                    if(modelResponse.MessageContent)
                    {
                        alert("user not found");
                        componentCurrent.route.navigate(["signin"]);
                        componentCurrent._booleanIsLoading = false;
                    }
                },
                signout(modelResponse: ResponseModel): void
                {
                    if(modelResponse.HTTPResponseCode === "400" || modelResponse.HTTPResponseCode === "401")
                    {
                        alert("Whoopss something bad happens!");
                        componentCurrent.route.navigate(["signin"]);
                    }
                }
            },
            this._modelUserLogin
        )
    }

    //#endregion


    //#region SHOWLOADING

    showLoading(): void
    {
        setTimeout(() => {
            this._booleanIsLoading = true;
        }, 500);
    }

    //#endregion
}

//#endregion
