//#region IMPORT

import { Pipe, PipeTransform } from '@angular/core';

//#endregion


//#region PIPE

@Pipe
(
    {
        name: 'customcurrency'
    }
)

//#endregion


//#region CLASS

export class CustomcurrencyPipe implements PipeTransform {

    //#region TRANSFORM

    transform
    (
        value: any,
    ): string

    {
        if(typeof value === 'string')
        {
            value = +value.replace(/[^0-9]/g, '');
        }
        value = value.toFixed(Math.max(0, ~~0));
        const regexResult = value.replace('.', ',').replace(new RegExp('\\d(?=(\\d{3})+$)', 'g'),'$&' + '.');
        return regexResult;
    }

    //#endregion
    
}

//#endregion