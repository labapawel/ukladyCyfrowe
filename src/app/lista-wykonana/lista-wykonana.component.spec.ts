import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaWykonanaComponent } from './lista-wykonana.component';

describe('ListaWykonanaComponent', () => {
  let component: ListaWykonanaComponent;
  let fixture: ComponentFixture<ListaWykonanaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaWykonanaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaWykonanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
