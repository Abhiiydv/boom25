import { Injectable } from '@angular/core';
import { Book } from './entity/book';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Book[] = [];

  addToCart(product: Book) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  constructor() { }

}
