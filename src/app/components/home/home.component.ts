//#region IMPORT

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

//#endregion


//#region COMPONENT

@Component
(
    {
        selector: 'app-home',
        templateUrl: './home.component.html',
        styleUrls: ['./home.component.sass']
    }
)

//#endregion


//#region CLASS

export class HomeComponent implements OnInit {

    //#region VARIABLE

    _username = this.activeRoute.snapshot.params['username'];
    _numberNum: number = 0;

    //#endregion


    //#region CONSTRUCTOR

    constructor(private route: Router, private activeRoute: ActivatedRoute)
    {

    }

    //#endregion


    //#region ONROUTE

    onRoute(): void
    {
        this.route.navigate(['/signin'])
    }

    //#endregion


    //#region INIT

    ngOnInit(): void
    {

    }

    //#endregion

}

//#endregion