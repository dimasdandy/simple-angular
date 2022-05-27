//#region IMPORT

import { Pipe, PipeTransform } from '@angular/core';

//#endregion


//#region PIPE
@Pipe
(
    {
        name: 'customepipe'
    }
)

//#endregion


//#region CLASS

export class CustomepipePipe implements PipeTransform {

    //#region TRANSFORM

    transform(value: number)
    {
        return value*2;
    }

    //#endregion

}

//#endregion
