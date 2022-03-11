import { Component, OnInit } from '@angular/core';
import { reduce } from 'rxjs/internal/operators/reduce';
import { Item } from 'src/app/model/item';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})
export class ItemsComponent implements OnInit {
  items: Item[] = [];
  total: number = 0;


  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    // this.items = [];
    // this.items = this.itemService.getItems();
    this.itemService.getItems().subscribe(data =>{
      this.items = data;
      this.getTotal();
    })
    // this.getTotal();
  }
  //la funcion filter vas regresar todos los elementos que sea diferente al id que estamos reciviendo  en item
  deleteItem(item: Item) {
    this.items = this.items.filter((x) => x.id !== item.id);
    this.itemService.deleteItem(item).subscribe();
    this.getTotal();
  }
  //lafuncion actualiza el precio cada vez que le hacemos click en check
  toggleItem(item: Item) {
    this.getTotal();
    this.itemService.toggleItem(item).subscribe();
  }

  getTotal() {
    this.total = this.items
      .filter((item) => !item.completed)
      //multiplicacion de cada elemento.
      .map((item) => item.quantity * item.price)
      .reduce((acc, item) => (acc += item), 0);
  }
}
