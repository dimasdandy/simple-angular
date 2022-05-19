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

    transform
    (
        value: number,
        currencySign: string = 'Rp. ',
        decimalLength: number = 0,
        chunkDelimiter: string = '.',
        decimalDelimiter: string = ',',
        chunkLength: number = 3
    ): string

    {
        value *= 1;

        let result = '\\d(?=(\\d{' + chunkLength + '})+' + (decimalLength > 0 ? '\\D' : '$') +')';
        let num = value.toFixed(Math.max(0, ~~decimalLength));

        return (
            currencySign +
            (
                decimalDelimiter ? num.replace('.', decimalDelimiter) : num).replace(
                new RegExp(result, 'g'),
                '$&' + chunkDelimiter
            )
        );
    }
}

//#endregion
