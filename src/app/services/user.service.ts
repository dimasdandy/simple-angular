//#region IMPORT

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WebAdressConstant } from '../constants/webaddress.constant';
import { UserLoginModel } from '../models/userlogin.model';
import { BaseService } from './bases/base.service';
import { GeneralServiceInterface } from '../interfaces/generalservice.interface';
import { CreateUserModel } from '../models/createuser.model';

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

export class UserService extends BaseService
{
	//#region CONSTRUCTOR

	constructor(http: HttpClient)
	{
		super(http)
	}

	//#endregion


	//#region METHOD

	getListDataUser(interfaceGeneralService: GeneralServiceInterface, page: number, per_page: number): void
	{
		return this.callServiceGetList(interfaceGeneralService, WebAdressConstant.STRING_URL_GET_LIST_USER, page, per_page);
	}

	postLogin(interfaceGeneralService: GeneralServiceInterface, modelUserLogin: UserLoginModel): void
	{
		return this.callServicePost(interfaceGeneralService, WebAdressConstant.STRING_URL_POST_LOGIN, JSON.stringify(modelUserLogin));
	}

	postCreateUser(interfaceGeneralService: GeneralServiceInterface, modelCreateUser: CreateUserModel): void
	{
		return this.callServicePost(interfaceGeneralService, WebAdressConstant.STRING_URL_POST_USER, JSON.stringify(modelCreateUser));
	}

	//#endregion

}

//#endregion