//#endregion IMPORT

import { BaseModel } from "./bases/base.model";

//#endregion


//#region CLASS
export class ListProductModel extends BaseModel
{
    hero_id?: string;
    hero_name?: string;
    hero_role?: string;

    /*Convention
    HeroId?: string;
    HeroName?: string;
    HeroRole?: string;
    */
}

//#endregion