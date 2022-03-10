import { Item } from './../../model/item';
import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  title: string = 'hola';
  @Input() item: Item = new Item();
  @Output() deleteItem: EventEmitter<Item> = new EventEmitter();
  @Output() toggleItem: EventEmitter<Item> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onDelete(item: Item) {
    this.deleteItem.emit(item);
  }
  //lafuncion actualiza el precio cada vez que le hacemos click en check
  onToggle(item: Item) {
    item.completed = !item.completed;
    this.toggleItem.emit(item);
  }
}
