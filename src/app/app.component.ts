import { Component } from '@angular/core';
import { ListaToDoService } from './lista-to-do.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'testujemy';
  tekstInput = '';

  constructor (private _lista:ListaToDoService)
  {

  }


  dodajDoListy()
  {

    this._lista.dodajElement(this.tekstInput);
    this.tekstInput = '';
  }

}
