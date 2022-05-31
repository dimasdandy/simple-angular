//#region IMPORT

import { ThisReceiver } from '@angular/compiler';
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

	//#region VARIABLE

	public _modelListUser: ListUsersModel = new ListUsersModel();
	public _arrayDataUser?: Array<DataUserModel> = new Array<DataUserModel>();
	public _numberPage: number;
	public _numberPerPage: number;
	public _booleanIsLoading: boolean = false;

	//#endregion


	//#region COSTRUCTOR

	constructor(private _serviceUser: UserService)
	{
		this._numberPage = 1;
		this._numberPerPage = 5;
	}

	//#endregion


	//#region INIT

	ngOnInit(): void
	{
		this.callListUser(this);
	}

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
			}, this._numberPage, this._numberPerPage
		)
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


	//#region CHANGEPERPAGE

	callChangePerPage(): void
	{
		this.callListUser(this);
	}

	//#endregion


	//#region CALLNEXTPAGE

	callNextPage(): void
	{
		if (this._modelListUser.total_pages)
		{
			this._numberPage += 1;
			this._modelListUser.page = this._numberPage;
			if (this._modelListUser.page > this._modelListUser.total_pages)
			{
				this._numberPage -= 1;
			}
			else
			{
				this.callListUser(this);
			}
		}
	}

	//#endregion


	//#region CALLNEXTPAGE

	callPreviousPage(): void
	{
		if (this._modelListUser.total_pages)
		{
			this._numberPage -= 1;
			this._modelListUser.page = this._numberPage;
			if (this._modelListUser.page === 0)
			{
				this._numberPage += 1;
			}
			else
			{
				this.callListUser(this);
			}
		}
	}

	//#endregion

}

//#endregion
