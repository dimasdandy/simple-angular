//#region IMPORT

import { Component, OnInit } from '@angular/core';

//#endregion


//#region COMPONENT

@Component
(
    {
        selector: 'app-loadingcircle',
        templateUrl: './loadingcircle.component.html',
        styleUrls: ['./loadingcircle.component.sass']
    }
)

//#endregion


//#region CLASS

export class LoadingcircleComponent implements OnInit {

    //#region CLASS

    public _booleanIsLoading: boolean = false;

    //#endregion


    //#region CONTRUCTOR

    constructor()
    {

    }

    //#endregion


    //#region INIT

    ngOnInit(): void
    {

    }

    //#endregion


    //#region SHOWLOADING

    showLoading(): void
    {
        setTimeout(() =>
        {
            this._booleanIsLoading = true;
        }, 500);
    }

    //#endregion
}

//#endregion