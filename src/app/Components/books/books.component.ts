import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/book.service';
import { CartService } from 'src/app/cart.service';
import { Book } from 'src/app/entity/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: Book[] = [];

  addToCart(product: Book) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

  constructor(public bookServ: BookService , private route: ActivatedRoute,
    private cartService: CartService) { }

  ngOnInit(): void {
    const promise = this.bookServ.getBookslist();
    promise.subscribe((response) => {
      console.log(response);
      this.books = response as Book[];
      console.log(this.books);
  })
}

}
