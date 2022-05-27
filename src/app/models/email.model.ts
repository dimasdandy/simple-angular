//#region IMPORT

import { ENUM_RESPONSE_STATE } from "../constants/enum.constant";
import { RegexConstant } from "../constants/regex.constant";
import { BaseModel } from "./bases/base.model";
import { ResponseModel } from "./response.model"

//#endregion


//#region CLASS

export class EmailModel extends BaseModel
{
    //#region VARIABLE

    Email?: string;
    Message?: string;

    //#endregion


    //#region VALIDATION

    validateEmail(): ResponseModel
    {
        const modelResponse: ResponseModel = new ResponseModel();
        const regularExpressionEmailFormat: RegExp = new RegExp(RegexConstant.STRING_REGULAREXPRESSION_EMAIL);

        if (this.Email == null || this.Email === undefined || this.Email == "")
        {
            modelResponse.MessageContent = "Email can't be empty";
            modelResponse.State = ENUM_RESPONSE_STATE.NotVerified;
        }
        else if (this.Email.length > 25)
        {
            modelResponse.MessageContent = "Email max length only 25 characters";
            modelResponse.State = ENUM_RESPONSE_STATE.NotVerified;

        }
        else if (!regularExpressionEmailFormat.test(this.Email))
        {
            modelResponse.MessageContent = "format email salah";
            modelResponse.State = ENUM_RESPONSE_STATE.NotVerified;
        }
        else
        {
            modelResponse.MessageContent = "Sukses";
            modelResponse.State = ENUM_RESPONSE_STATE.Success;
        }

        return modelResponse;
    }

    //#endregion
}

//#endregion