import { Injectable } from '@angular/core';
import { Item } from 'src/app/model/item';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  url:string = 'http://localhost:3000/items';
  httpOptions = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
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
  
  constructor(private http:HttpClient) { }
  //va a devolver un objeto obsevarble o un flujo
  getItems(): Observable<Item[]>{
    return this.http.get<Item[]>(this.url);
    // return this.items
  }

  addItem(item:Item):Observable<Item>{
    // this.items.unshift(item)
    return this.http.post<Item>(this.url, item, this.httpOptions);
  }
  toggleItem(item:Item):Observable<Item>{
    return this.http.put<Item>(this.url + Item, this.httpOptions);
  }

  deleteItem(item:Item):Observable<Item>{
    return this.http.delete<Item>(this.url + item.id)
  }
}
