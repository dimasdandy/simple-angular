//#region IMPORT

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

//#endregion


//#region COMPONENT

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})

//#endregion


//#region CLASS

export class HomeComponent implements OnInit {

  _username = this.activeRoute.snapshot.params['username'];
  _numberNum: number = 0;
  _arrayHeaders =
  [
    "First Name",
    "Last Name",
    "isOnline"
  ]
  _arrayListValue =
  [
    {
      "first_name": "Sammy",
      "last_name": "Shark",
      "isOnline": true
    },
    {
      "first_name": "Sammy",
      "last_name": "Shark",
      "isOnline": true
    }
  ]

  //#region CONSTRUCTOR

  constructor(private route: Router, private activeRoute: ActivatedRoute, private _userService: UserService) { }

  //#endregion


  //#region ONROUTE

  onRoute(): void
  {
    // this.route.navigateByUrl("/signin");
    this.route.navigate(['/signin'])
  }

  //#endregion


  //#region INIT

  ngOnInit(): void
  {

  }

  //#endregion

}

//#endregion