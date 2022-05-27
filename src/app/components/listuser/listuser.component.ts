//#region IMPORT

import { Component, OnInit } from '@angular/core';
import { DataUserModel } from 'src/app/models/datauser.model';
import { ListUsersModel } from 'src/app/models/listusers.model';
import { ResponseModel } from 'src/app/models/response.model';
import { UserService } from 'src/app/services/user.service';

//#endregion


//#region COMPONENT

@Component
(
	{
		selector: 'app-listuser',
		templateUrl: './listuser.component.html',
		styleUrls: ['./listuser.component.sass']
	}
)

//#endregion


//#region CLASS

export class ListuserComponent implements OnInit
{

  public _modelListUser?: ListUsersModel = new ListUsersModel();
  public _arrayDataUser?: Array<DataUserModel> = new Array<DataUserModel>();

  //#region COSTRUCTOR

  constructor(private _serviceUser: UserService) { }

  //#endregion


  //#region CALLAPILISTUSER

	callListUser(componentCurrent: ListuserComponent): void
	{
		this._serviceUser.getListDataUser
		(
			{
				success(modelResponse: ResponseModel): void
				{
					if(modelResponse.HTTPResponseCode === "200")
					{
						if(modelResponse.Data !== undefined)
						{
							componentCurrent._modelListUser = JSON.parse(modelResponse.Data);
							componentCurrent._arrayDataUser = componentCurrent._modelListUser?.data;
						}
					}

				},
				fail(modelResponse: ResponseModel): void
				{
					if(modelResponse.HTTPResponseCode == "400" || modelResponse.HTTPResponseCode == "401")
					{
						alert(modelResponse.MessageTitle);
					}
				},
				signout(modelResponse: ResponseModel): void
				{
					if(modelResponse.HTTPResponseCode === "400" || modelResponse.HTTPResponseCode === "401")
					{
						alert(modelResponse.MessageTitle);
					}
				}
			}
		)
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
