//#region  IMPORT

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateUserModel } from 'src/app/models/createuser.model';
import { ResponseModel } from 'src/app/models/response.model';
import { UserLoginModel } from 'src/app/models/userlogin.model';
import { UserService } from 'src/app/services/user.service';

//#endregion


//#region COMPONENT

@Component
(
    {
        selector: 'app-form',
        templateUrl: './form.component.html',
        styleUrls: ['./form.component.sass']
    }
)

//#endregion


//#region CLASS

export class FormComponent implements OnInit
{

    //#region VARIBLE

    public _modelCreateUser: CreateUserModel = new CreateUserModel();
    public _modelUserLogin: UserLoginModel = new UserLoginModel();

    //#endregion


    //#region CONSTRUCTOR

    constructor(private _serviceUser: UserService, private route: Router) { }

    //#endregion


    //#region  INIT

    ngOnInit(): void
    {
    }

    //#endregion


    //#region ONCLICK

    onClick(componentCurrent: FormComponent): void
    {
        this._serviceUser.postCreateUser
        (
            {
                success(modelResponse: ResponseModel): void
                {
                    if(modelResponse.HTTPResponseCode === "201")
                    {
                        if(modelResponse.Data !== undefined)
                        {
                            componentCurrent._modelCreateUser = JSON.parse(modelResponse.Data)
                            alert(JSON.stringify(componentCurrent._modelCreateUser));
                            componentCurrent._modelCreateUser.name = "";
                            componentCurrent._modelCreateUser.job = "";
                            // componentCurrent.route.navigate(["home/" + componentCurrent._modelUserLogin.email]);
                        }
                    }

                },
                fail(modelResponse: ResponseModel): void
                {
                    if(modelResponse.HTTPResponseCode == "400" || modelResponse.HTTPResponseCode == "401")
                    {
                        componentCurrent._modelCreateUser = JSON.parse(modelResponse.Data!);
                        alert("Whoopss something bad happens!");
                    }
                },
                signout(modelResponse: ResponseModel): void
                {
                    if(modelResponse.HTTPResponseCode === "400" || modelResponse.HTTPResponseCode === "401")
                    {
                        componentCurrent._modelCreateUser = JSON.parse(modelResponse.Data!);
                        alert("Whoopss something bad happens!");
                    }
                }
            }
            ,this._modelCreateUser
        )
    }

    //#endregion

}

//#endregion
