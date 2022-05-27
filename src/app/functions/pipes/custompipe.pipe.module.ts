//#region IMPORT

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomepipePipe } from './customepipe.pipe';
import { CustomcurrencyPipe } from './customcurrency.pipe';

//#endregion


//#region MODULE

@NgModule
(
	{
		declarations:
		[
			CustomepipePipe,
			CustomcurrencyPipe
		],
		imports:
		[
			CommonModule
		],
		exports:
		[
			CustomepipePipe,
			CustomcurrencyPipe
		]
	}
)

//#endregion


//#region CLASS

export class CustompipeModule
{

}

//#endregion