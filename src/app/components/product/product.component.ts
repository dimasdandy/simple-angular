//#region IMPORT

import { Component, OnInit } from '@angular/core';
import { ListProductModel } from 'src/app/models/listproduct.model';
import { ProductService } from 'src/app/services/product.service';

//#endregion


//#region COMPONENT

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})

//#endregion



//#region CLASS

export class ProductComponent implements OnInit {

  _arrayData?: Array<ListProductModel>;

  //#region CONTRUCTOR

  constructor(private _productService: ProductService) { }

  //#endregion


  //#region INIT

  ngOnInit(): void
  {
    this._productService.getAllProduct().subscribe(res =>
      {
        this._arrayData = res.hero
      }
    )
  }

  //#endregion
}

//#endregion