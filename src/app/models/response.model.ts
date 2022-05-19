//#region IMPORT

import { TokenModel } from "./token.model";

//#endregion


//#region CLASS

export class ResponseModel
{
    ID?: number;
    HTTPResponseCode?: string;
    ServiceResponseCode?: string;
    MessageTitle?: string;
    MessageContent?: string;
    Data?: string;
    State?: string;
}

//#endregion