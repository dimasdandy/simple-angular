//#region IMPORT

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/user.model';

//#endregion


//#region COMPONENT

@Component
(
    {
        selector: 'app-signin',
        templateUrl: './signin.component.html',
        styleUrls: ['./signin.component.sass']
      }
)

//#endregion


//#region CLASS

export class SigninComponent implements OnInit
{
    //#region VARIABLE

    _modelUser = new UserModel();
    
    //#endregion


    //#region CONSTRUCTOR

    constructor(private route: Router)
    {

    }

    //#endregion


    //#region INTIALIZATION

    ngOnInit(): void
    {

    }

    //#endregion


    //#region ONCLICK

    onClick(): void
    {
        if (this._modelUser.Username != "test" && this._modelUser.Password != "12345")
        {
            alert("Usename / Password salah");
        }
        else if (this._modelUser.Username == "" || this._modelUser.Password == "")
        {
            alert("Silahkan isi form dibawah");
        }
        else
        {
            // this.route.navigateByUrl("/home/"+this._modelUser.Username);
            this.route.navigate(["home/"+this._modelUser.Username])
        }
    }

    //#endregion
}

//#endregion
