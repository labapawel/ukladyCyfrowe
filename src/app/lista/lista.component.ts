import { ListaToDoService, elementToDo } from './../lista-to-do.service';
import {Component, OnInit, ViewEncapsulation } from '@angular/core';

import * as moment from 'moment'; // add this 1 of 4

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.less'],
  encapsulation: ViewEncapsulation.None
})


export class ListaComponent implements OnInit {
  lista: Array<elementToDo>;

  constructor(private _listaToDo: ListaToDoService) {
    this._listaToDo.getList().subscribe( (_list) => {
      this.lista = _list.filter(e => !e.Wykonane);
    })

   // moment().locale('pl');
   }

   iledni(item)
   {
     return moment(item.Dodano).locale('pl').calendar();
   }

   bgColor(zmienna:elementToDo): string
    {
      const ileDni = moment().diff(zmienna.Dodano, 'day');

      if (ileDni < 3) {
        return 'green';
      } else if (ileDni > 7) {
        return '#f45641';
      } else {
        return '#f4b642';
      }

      let tab = ['red','green','#fafafa'];
      let los = Math.floor(Math.random() * 3);
      return tab[los];
    }


   usun(item)
   {
    this._listaToDo.usun(item);
   }

   wykonane(item)
   {
    this._listaToDo.wykonane(item);
   }


  ngOnInit() {
  }


}
