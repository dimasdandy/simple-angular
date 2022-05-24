//#region IMPORT

import { Component, OnInit } from '@angular/core';

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

	public _stringNum1: string = "0";
	public _stringNum2: string = "0";
	public _numberResult: number = 0;

	//#endregion


	//#region CONSTRUCTOR

	constructor()
	{

	}

	//#endregion


	//#region INIT

	ngOnInit(): void
	{
		this.onCalculate();
	}

	//#endregion


	//#region ONCURRENCYPIPE

	// onCurrencyPipe(data?: string): void
	// {
	// 	// this._numberResult = (+this._stringNum1) * (+this._stringNum2);

	// 	if(data)
    //     {
    //         const num = +data.replace(/[^0-9]/g, '');
    //         let result = '\\d(?=(\\d{3})+$)';
    //         data = num.toFixed(Math.max(0, ~~0));
    //         const rupiah = data.replace('.', ',').replace(new RegExp(result, 'g'),'$&' + '.');
    //         this._stringNum1 = rupiah;
	// 		this._stringNum2 = rupiah;
    //     }
	// }

	//#endregion


	//#region ONCALCULATE

	onCalculate(): number
	{
		this._numberResult = +this._stringNum1.replace(/[^0-9]/g, '') * +this._stringNum2.replace(/[^0-9]/g, '');
		return this._numberResult;
	}
}

//#endregion