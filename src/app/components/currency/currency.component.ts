import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.sass']
})
export class CurrencyComponent implements OnInit {

  public _numberNum?: number;

  constructor() { }

  ngOnInit(): void {
  }

}
