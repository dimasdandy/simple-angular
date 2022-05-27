//#region CLASS

import { ENUM_RESPONSE_STATE } from "../constants/enum.constant";

export class ResponseModel
{
    ID?: number;
    HTTPResponseCode?: string;
    ServiceResponseCode?: string;
    MessageTitle?: string;
    MessageContent?: string;
    Data?: string;
    State?: ENUM_RESPONSE_STATE;
}

//#endregion