import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
@Component({
  selector: 'app',
  templateUrl: './chooseservice.component.html',
  styleUrls: ['./chooseservice.component.css']
})
export class ChooseserviceComponent implements OnInit {

  constructor(private _location: Location) { }

  ngOnInit() {
  }

  backClicked() {
    this._location.back();
}

}
