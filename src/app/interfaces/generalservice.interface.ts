//#region INTERFACE

import { ResponseModel } from "../models/response.model";

//#endregion


//#region INTERFACE

export interface GeneralServiceInterface
{
    //#region CALLBACK

    success(modelResponse: ResponseModel): void;
    fail(modelResponse: ResponseModel): void;
    signout(modelResponse: ResponseModel): void;

    //#endregion
}

//#endregion