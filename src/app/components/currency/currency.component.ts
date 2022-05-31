//#region IMPORT

import { Component, OnInit } from '@angular/core';
import { RegexConstant } from 'src/app/constants/regex.constant';

//#endregion


//#region COMPONENT

@Component
(
	{
		selector: 'app-currency',
		templateUrl: './currency.component.html',
		styleUrls: ['./currency.component.sass']
	}
)

//#endregion


//#region CLASS

export class CurrencyComponent implements OnInit {

	//#region VARIABLE

	public _stringNum1: string;
	public _stringNum2: string;
	public _stringRegexNumberRange: string;
	public _numberResult: number;

	//#endregion


	//#region CONSTRUCTOR

	constructor()
	{
		this._stringNum1 = "0";
		this._stringNum2 = "0";
		this._stringRegexNumberRange = RegexConstant.STRING_REGULAREXPRESSION_NUMBER_RANGE
		this._numberResult = 0;
	}

	//#endregion


	//#region INIT

	ngOnInit(): void
	{
		this.onCalculate();
	}

	//#endregion


	//#region ONCALCULATE

	onCalculate(): number
	{
		this._numberResult = +this._stringNum1.replace(/[^0-9]/g, '') * +this._stringNum2.replace(/[^0-9]/g, '');
		return this._numberResult;
	}

	//#endregion

}

//#endregion