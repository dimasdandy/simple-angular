//#region IMPORT

import { BaseModel } from "./bases/base.model";
import { DataUserModel } from "./datauser.model";
import { SupportUserModel } from "./supportuser.model";

//#endregion


//#region CLASS

export class ListUsersModel extends BaseModel
{
    page?: number;
    per_page?: number;
    total?: number;
    total_pages?: number;
    data?: Array<DataUserModel>;
    support?: SupportUserModel;

    /* Convention
    Page?: number;
    PerPage?: number;
    Total?: number;
    TotalPages?: number;
    Data?: Array<DataUserModel>;
    Support?: SupportUserModel;
    */
}

//#endregion