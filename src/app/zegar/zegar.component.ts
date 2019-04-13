import { Component, OnInit } from '@angular/core';
import * as moment from 'moment'; // add this 1 of 4

@Component({
  selector: 'app-zegar',
  templateUrl: './zegar.component.html',
  styleUrls: ['./zegar.component.less']
})
export class ZegarComponent implements OnInit {

  constructor() { }

  czas: Date = new Date();
  czas1: Date = new Date();

 diff()
 {
   return moment(this.czas).diff(this.czas1, 'millisecond');
 }

  ngOnInit() {
    setInterval( () => {
      this.czas = new Date();
      this.czas1 = moment(this.czas1).add(1, 'second').toDate();
    }, 1000 );
  }

}
