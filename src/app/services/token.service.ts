//#region IMPORT

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WebAdressConstant } from '../constants/webaddress.constant';
import { GeneralServiceInterface } from '../interfaces/generalservice.interface';
import { BaseService } from './bases/base.service';

//#endregion


//#region INJECT

@Injectable
(
    {
        providedIn: 'root'
    }
)

//#endregion


//#region CLASS

export class TokenService extends BaseService
{

    //#region CONSTRUCTOR

    constructor(http: HttpClient)
    {
        super(http);
    }

    //#endregion


    //#region METHODSERVICE

    postGenerateTokenDummy(interfaceGeneralService: GeneralServiceInterface): void
    {
        return this.callServicePost(interfaceGeneralService, WebAdressConstant.STRING_URL_POST_GENERATE_TOKEN_DUMMY, JSON.stringify(""));
    }

    postVerifyTokenDummy(interfaceGeneralService: GeneralServiceInterface, modelVerifyToken?: string): void
    {
        return this.callServicePost(interfaceGeneralService, WebAdressConstant.STRING_URL_POST_VERIFY_TOKEN_DUMMY, JSON.stringify(modelVerifyToken));
    }

    //#endregion

}

//#endregion