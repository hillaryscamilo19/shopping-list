import { Injectable } from '@angular/core';
import { Item } from 'src/app/model/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  items: Item[] = [
      //definicion de datos.
      {
       id: 0,
       title: 'manzana',
       price: 10.5,
       quantity: 4,
       completed: false,
     },
     {
       id: 1,
       title: 'pan',
       price: 3.5,
       quantity: 8,
       completed: false,
     },
     {
       id: 2,
       title: 'abrigo',
       price: 450,
       quantity: 1,
       completed: false,
     },
     {
       id: 3,
       title: 'zapato',
       price: 1500,
       quantity: 2,
       completed: false,
     },
     {
       id: 4,
       title: 'Blusa',
       price: 250,
       quantity: 3,
       completed: false,
     },
     {
       id: 5,
       title: 'Jean',
       price: 200,
       quantity: 3,
       completed: false,
     },
   ];
  
  constructor() { }

  getItems(){
    return this.items
  }

  addItem(item:Item){
    this.items.unshift(item)
  }
}
