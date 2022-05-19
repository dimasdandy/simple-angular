//#region IMPORT

import { BaseModel } from "./bases/base.model";

//#endregion


//#region CLASS

export class DataUserModel extends BaseModel
{
    id?: string;
    email?: string;
    first_name?: string;
    last_name?: string;
    avatar?: string;

    /* Convention
    ID?: string;
    Email?: string;
    FirstName?: string;
    LastName?: string;
    Avatar?: string;
    */
}

//#endregion