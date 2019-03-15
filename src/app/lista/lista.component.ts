import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.less']
})
export class ListaComponent implements OnInit {

  // tablica stringow
  lista = ['test 1', 'test 2'];
  tekstInput: string;  // model dla inputa

  constructor() { }

  ngOnInit() {
  }

  saveValue(val)
  {
    this.tekstInput = val.target.value;
  }

  dodajDoListy()
  {

    console.log(this.tekstInput);
    this.lista.push(this.tekstInput);
    this.tekstInput = "";
  }


}
