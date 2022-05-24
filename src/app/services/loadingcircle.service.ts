//#region IMPORT

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

//#endregion


//#region INJECTABLE

@Injectable
(
    {
        providedIn: 'root'
    }
)

//#endregion


//#region CLASS

export class LoadingcircleService
{

    //#region VARIABLE

    private _numberCount: number = 0;
    private _loadingCircle = new BehaviorSubject<string>('');

    //#endregion


    //#region CONSTRUCTOR

    constructor()
    {

    }

    //#endregion


    getSpinner(): Observable<string>
    {
        return this._loadingCircle.asObservable();
    }

    showLoadingCircle(): void
    {
        // if (++)
    }

}

//#endregion