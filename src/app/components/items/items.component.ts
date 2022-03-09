import { Component, OnInit } from '@angular/core';
import { reduce } from 'rxjs/internal/operators/reduce';
import { Item } from 'src/app/model/item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})
export class ItemsComponent implements OnInit {
  items: Item[] = [];
  total: number = 0;
  constructor() {}

  ngOnInit(): void {
    this.items = [
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
        completed: true,
      },
      {
        id: 2,
        title: 'abrigo',
        price: 450,
        quantity: 1,
        completed: true,
      },
    ];
    this.getTotal();
  }
  //la funcion filter vas regresar todos los elementos que sea diferente al id que estamos reciviendo  en item
  deleteItem(item: Item) {
    this.items = this.items.filter((x) => x.id!, item.id);
    this.getTotal()
  }
  //lafuncion actualiza el precio cada vez que le hacemos click en check
  toggleItem(item: Item){
    this.getTotal()
  }

  getTotal() {
    this.total = this.items
      .filter((item) => !item.completed)
      .map((item) => item.quantity * item.price)
      .reduce((acc, item) => acc += item , 0)
  }
}
