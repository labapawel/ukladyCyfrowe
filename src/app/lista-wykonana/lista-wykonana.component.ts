import { ListaToDoService, elementToDo } from './../lista-to-do.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-wykonana',
  templateUrl: './lista-wykonana.component.html',
  styleUrls: ['./lista-wykonana.component.less']
})
export class ListaWykonanaComponent implements OnInit {

  lista: Array<elementToDo>;

  constructor(private _listaToDo: ListaToDoService) {
    this._listaToDo.getList().subscribe( (_list) => {
      this.lista = _list.filter(e => e.Wykonane);
    })
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
