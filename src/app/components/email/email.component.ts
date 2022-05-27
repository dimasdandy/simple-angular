//#region IMPORT

import { Component, OnInit } from '@angular/core';
import { ENUM_RESPONSE_STATE } from 'src/app/constants/enum.constant';
import { EmailModel } from 'src/app/models/email.model';
import { ResponseModel } from 'src/app/models/response.model';

//#endregion


//#region Component

@Component
(
    {
        selector: 'app-email',
        templateUrl: './email.component.html',
        styleUrls: ['./email.component.sass']
    }
)

//#endregion


//#region CLASS

export class EmailComponent implements OnInit
{

    //#region VARIABLE

    public _modelEmail: EmailModel;
    _enumConstant = ENUM_RESPONSE_STATE;


    //#endregion


    //#region CONSTRUCTOR

    constructor()
    {
        this._modelEmail = new EmailModel();
    }

    //#endregion


    //#region INIT

    ngOnInit(): void
    {

    }

    //#endregion


    //#region SUBMITEMAIL

    submitEmail(): void
    {
        const modelResponseValidationEmail: ResponseModel = this._modelEmail.validateEmail();

        if (modelResponseValidationEmail.State === ENUM_RESPONSE_STATE.Success)
        {
            alert(modelResponseValidationEmail.MessageContent);
        }
        else
        {
           alert(modelResponseValidationEmail.MessageContent);
        }
    }

    //#endregion

}
