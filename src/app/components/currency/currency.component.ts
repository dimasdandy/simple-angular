import { Component, OnInit } from '@angular/core';
import { CustomcurrencyPipe } from 'src/app/functions/pipes/customcurrency.pipe';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.sass']
})
export class CurrencyComponent implements OnInit {

  public _numberNum: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
