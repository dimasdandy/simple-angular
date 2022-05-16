//#region IMPORT

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomepipePipe } from './customepipe.pipe';

//#endregion


//#region MODULE

@NgModule
(
  {
  declarations:
  [
    CustomepipePipe
  ],
  imports:
  [
    CommonModule
  ],
  exports:
  [
    CustomepipePipe
  ]
  }
)

//#endregion


//#region EXPORT

export class CustompipeModule { }

//#endregion