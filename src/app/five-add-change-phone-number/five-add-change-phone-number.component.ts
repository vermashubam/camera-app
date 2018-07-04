import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: './five-add-change-phone-number.component.html',
  styleUrls: ['./five-add-change-phone-number.component.css']
})
export class FiveAddChangePhoneNumberComponent implements OnInit {
counter = 0;
one = false;
two = false;
three = false;

  constructor() { }

  ngOnInit() {
  }

  add(){
    this.counter++;
    if(this.counter >= 1){
      this.one = true; 
    }
    else if(this.counter >= 2){
      this.two = true; 
    }
    else if(this.counter >= 3){
      this.three = true; 
    }

    console.log(this.counter >= 3)

  }
  sub(){
    this.counter--;
    console.log(this.counter);
  }

}
