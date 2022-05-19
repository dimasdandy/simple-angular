//#region IMPORT

import { BaseModel } from "./bases/base.model";
import { ListProductModel } from "./listproduct.model";

//#endregion


//#region CLASS

export class ProductModel extends BaseModel
{
    hero?: Array<ListProductModel>;
    message?: string;

    /* Convention
    Hero?: Array<ListProductModel>;
    Message?: string;
    */
}

//#endregion