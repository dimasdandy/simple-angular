//#region IMPORT

import { BaseModel } from "./bases/base.model";

//#endregion


//#region CLASS

export class CreateUserModel extends BaseModel
{
    name?: string;
    job?: string;

    /*CONVENTION
    Name?: string;
    Job?: string;
    */
}

//#endregion