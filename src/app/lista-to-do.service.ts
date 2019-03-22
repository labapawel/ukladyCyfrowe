import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface elementToDo {
  nazwa: string;
  dataWykonania: Date;
  Wykonane: boolean;
}


@Injectable({
  providedIn: 'root'
})
export class ListaToDoService {

  lista: Array<elementToDo> = new Array<elementToDo>();
  _obs =  new BehaviorSubject<Array<elementToDo>>([]);


  dodajElement(opis: string): elementToDo
  {
    let nowyElement: elementToDo = {nazwa: opis, Wykonane: false, dataWykonania: null};
    this.lista.push(nowyElement);
    this._obs.next(this.lista);
    return nowyElement;
  }


  usun(item)
  {
    this.lista = this.lista.filter(e => e != item);
    this._obs.next(this.lista);
  }

  wykonane(item: elementToDo)
  {
    item.Wykonane = true;
    item.dataWykonania = new Date();
    this._obs.next(this.lista);
  }


  getList()
  {
    return this._obs.asObservable();
  }

  constructor() { }
}
