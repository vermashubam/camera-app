import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  cusId : 'C-XIJHIH';
  save : any;
  constructor() { }

  ngOnInit() {
    this.save = localStorage.getItem('currentUser');
    console.log('retrieve'+this.save);

  }

}
