import { Component, OnInit } from '@angular/core';

interface elementToDo {
  nazwa: string;
  dataWykonania: Date;
  Wykonane: boolean;
}


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.less']
})


export class ListaComponent implements OnInit {



  // tablica stringow
  lista: Array<elementToDo> = new Array<elementToDo>();
  listaWyszukana: Array<elementToDo>;
  listaWykonana: Array<elementToDo>;

  tekstInput: string;  // model dla inputa

  constructor() { }

  ngOnInit() {

    this.szukaj(this.tekstInput);

  }

  szukaj(param)
  {
    if(!param || param == '')
    {
      this.listaWyszukana = this.lista.filter(e => !e.Wykonane);
      this.listaWykonana = this.lista.filter(e => e.Wykonane);
    }
    else
    {
      this.listaWyszukana = this.lista.filter(e => e.nazwa.includes(param) && !e.Wykonane);
      this.listaWykonana = this.lista.filter(e => e.nazwa.includes(param) && e.Wykonane);
    }
  }


  usun(element)
  {
    this.lista = this.lista.filter(e => e != element);
    this.szukaj(this.tekstInput);
  }

  wykonane(item: elementToDo)
  {
    console.log(item.nazwa);
    item.Wykonane = true;
    item.dataWykonania = new Date();
    this.szukaj(this.tekstInput);
  }

  dodajDoListy()
  {

    console.log(this.tekstInput);

    let nowyElement: elementToDo = {nazwa: this.tekstInput, Wykonane:false, dataWykonania: null};
    this.lista.push(nowyElement);
    this.tekstInput = '';
    this.szukaj(this.tekstInput);
  }


}
