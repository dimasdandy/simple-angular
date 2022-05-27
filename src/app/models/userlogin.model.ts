//#region IMPORT

import { ENUM_RESPONSE_STATE } from "../constants/enum.constant";
import { RegexConstant } from "../constants/regex.constant";
import { BaseModel } from "./bases/base.model";
import { ResponseModel } from "./response.model"

//#endregion


//#region CLASS

export class UserLoginModel extends BaseModel
{
    email?: string
    password?: string

    /* Convention
    Email?: string
    Password?: string
    */

    //#region VALIDATION

    validateEmail(): ResponseModel
    {
        const modelResponse: ResponseModel = new ResponseModel();
        const regularExpression: RegExp = new RegExp(RegexConstant.STRING_REGULAREXPRESSION_EMAIL);

        if (this.email == null || this.email === undefined || this.email == "")
        {
            modelResponse.MessageContent = "Email can't be empty";
        }
        else if (regularExpression.test(this.email))
        {
            modelResponse.MessageContent = "Login Success";
            modelResponse.State = ENUM_RESPONSE_STATE.Success;
        }
        else
        {
            modelResponse.MessageContent = "Enter a valid email";
        }

        return modelResponse;
    }

    validatePassword(): ResponseModel
    {
        const modelResponse: ResponseModel = new ResponseModel();

        if (this.password == null || this.password === undefined || this.password == "")
        {
            modelResponse.MessageContent = "Password can't be empty";
        }

        return modelResponse;
    }

    //#endregion
}

//#endregion