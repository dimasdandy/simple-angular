//#region IMPORT

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResponseModel } from 'src/app/models/response.model';
import { VerifyTokenModel } from 'src/app/models/verifytoken.model';
import { TokenService } from 'src/app/services/token.service';

//#endregion


//#region COMPONENT

@Component
(
    {
        selector: 'app-token',
        templateUrl: './token.component.html',
        styleUrls: ['./token.component.sass']
    }
)

//#endregion


//#region CLASS

export class TokenComponent implements OnInit {
    //#region VARIABLE

    public _modelVerifyToken: VerifyTokenModel;

    //#endregion


    //#region COsNTRUCTOR

    constructor(private route: Router, private _tokenService: TokenService)
    {
        this._modelVerifyToken = new VerifyTokenModel;
    }

    //#endregion


    //#region GENERATETOKEN

    onGenerateToken(componentCurrent: TokenComponent): void
    {
        this._tokenService.postGenerateTokenDummy
        (
            {
                success(modelResponse: ResponseModel): void
                {
                    if (modelResponse.HTTPResponseCode === "200")
                    {
                        if (modelResponse.Data !== undefined)
                        {
                            componentCurrent._modelVerifyToken.Token = JSON.parse(modelResponse.Data);
                            alert("success : " + componentCurrent._modelVerifyToken.Token);
                        }
                    }
                },
                fail(modelResponse: ResponseModel): void
                {
                    alert(modelResponse.MessageTitle);
                },
                signout(modelResponse: ResponseModel): void
                {
                    if (modelResponse.HTTPResponseCode === "400" || modelResponse.HTTPResponseCode === "401")
                    {
                        alert("Whoopss something bad happens!");
                    }
                }
            }
        )
    }

    onVerifyToken(componentCurrent: TokenComponent): void
    {
        this._tokenService.postVerifyTokenDummy
        (
            {
                success(modelResponse: ResponseModel): void
                {
                    if (modelResponse.HTTPResponseCode === "200")
                    {
                        if (modelResponse.Data !== undefined)
                        {
                            componentCurrent._modelVerifyToken.Token = JSON.parse(modelResponse.Data);
                            alert("success : " + modelResponse.Data);
                        }
                    }

                },
                fail(modelResponse: ResponseModel): void
                {
                    alert(modelResponse.MessageContent);
                },
                signout(modelResponse: ResponseModel): void
                {
                    if (modelResponse.HTTPResponseCode === "400" || modelResponse.HTTPResponseCode === "401")
                    {
                        alert("Whoopss something bad happens!");
                    }
                }
            },
            this._modelVerifyToken.Token
        )
    }

    //#endregion


    //#region INIT

    ngOnInit(): void
    {

    }

    //#endregion
}

//#endregion