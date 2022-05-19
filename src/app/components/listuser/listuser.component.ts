//#region IMPORT

import { Component, OnInit } from '@angular/core';
import { DataUserModel } from 'src/app/models/datauser.model';
import { ListUsersModel } from 'src/app/models/listusers.model';
import { ResponseModel } from 'src/app/models/response.model';
import { UserService } from 'src/app/services/user.service';

//#endregion


//#region COMPONENT

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.sass']
})

//#endregion


//#region CLASS

export class ListuserComponent implements OnInit
{

  public _arrayListUser?: Array<DataUserModel> = Array<DataUserModel>();

  //#region COSTRUCTOR

  constructor(private _userService: UserService) { }

  //#endregion


  //#region CALLAPILISTUSER

  callListUser(componentCurrent: ListuserComponent): void
  {
    this._userService.getListDataUser
        ({
            success(modelResponse: ResponseModel): void
            {
                if(modelResponse.HTTPResponseCode === "200")
                {
                    if(modelResponse.Data !== undefined)
                    {
                      alert(JSON.stringify(modelResponse));
                      componentCurrent._arrayListUser = JSON.parse(modelResponse.Data);
                      console.log(componentCurrent._arrayListUser);
                    }
                }

            },
            fail(modelResponse: ResponseModel): void
            {
                if(modelResponse.HTTPResponseCode == "400" || modelResponse.HTTPResponseCode == "401")
                {
                  alert();
                }
            },
            signout(modelResponse: ResponseModel): void
            {
                if(modelResponse.HTTPResponseCode === "400" || modelResponse.HTTPResponseCode === "401")
                {
                  alert()
                }
            }
        })
  }

  //#endregion


  //#region INIT

  ngOnInit(): void
  {
    this.callListUser(this);
  }

  //#endregion
}

//#endregion
