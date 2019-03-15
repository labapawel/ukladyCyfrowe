import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.less']
})
export class HeadComponent implements OnInit {

  tekst: string = 'lorem lipsum';
  liczba1 = 0x10;
  liczba2: number;
  liczba3 = 0B010101010101;
  liczba4 = 1.2344232;
  public czas = new Date();
  private tablica: string[];
  lista: Array<string>;

  constructor() { }

  ngOnInit() {
    const aaa = 123;
    let i = 125;
    for(let i=0; i<5; i++)
    {
      console.log(i);
    }
    console.log(i);


  }

}
