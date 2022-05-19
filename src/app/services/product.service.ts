//#region IMPORT

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductModel } from '../models/product.model';

//#endregion


/*
Attribute - Start
Description : Service.
Author : Dimas Dandy Aryarajendra Suprapto.
Created on : Sunday, 15 Mei 2022. Updated on : Sunday, 15 Mei 2022.
Created by : Dimas Dandy Aryarajendra Suprapto. Updated by : Dimas Dandy Aryarajendra Suprapto.
Version : 1.0.:0.
*/

/* Attributes - End */


//#region INJECTABLE

@Injectable
(
  {
  providedIn: 'root'
  }
)

//#endregion


//#region CLASS

export class ProductService
{

  //#region CONSTRUCTOR

  constructor(private http: HttpClient) { }

  //#endregion

  getAllProduct(): Observable<ProductModel>
  {
    return this.http.get(`https://api.dazelpro.com/mobile-legends/hero`);
  }

}

//#endregion