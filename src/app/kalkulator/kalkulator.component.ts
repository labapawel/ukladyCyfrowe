import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kalkulator',
  templateUrl: './kalkulator.component.html',
  styleUrls: ['./kalkulator.component.less']
})
export class KalkulatorComponent implements OnInit {

  liczba1 = 0x00;
  liczba2 = 0B00000000;
  wynik = 0;

  constructor() { }


  addBit_liczba1(numerBitu)
  {
    this.liczba1 |= (1 << numerBitu);
  }

  czyBit(zmienna, numerBitu): boolean
  {
    return (zmienna & (1 << numerBitu)) == (1 << numerBitu);
  }

  negacjaBit_liczba1(numerBitu)
  {
    this.liczba1 ^= (1 << numerBitu);
    this.wynik = this.liczba1 & this.liczba2;
  }

  negacjaBit_liczba2(numerBitu)
  {
    this.liczba2 ^= (1 << numerBitu);
    this.wynik = this.liczba1 & this.liczba2;
  }

  delBit_liczba1(numerBitu)
  {
    this.liczba1 &= ~(1 << numerBitu);
  }

  ngOnInit() {
    this.wynik = this.liczba1 & this.liczba2;
  }

}
