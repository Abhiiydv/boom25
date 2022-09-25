import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/book.service';
import { CartService } from 'src/app/cart.service';
import { Book } from 'src/app/entity/book';

@Component({
  selector: 'app-searchbooks',
  templateUrl: './searchbooks.component.html',
  styleUrls: ['./searchbooks.component.css']
})
export class SearchbooksComponent implements OnInit {

  enteredValue1: string;
  enteredValue2: string;
  enteredValue3: string;

  books: Book[] = [];

  SearchByCategory(enteredValue1:string){

      this.bookserv.searchbyCategory(enteredValue1).subscribe(response =>{
      console.log(response);
      console.log(enteredValue1);
      console.log(this.books);
     
      this.books = response as Book[];
    
     },
     function (error) {
      console.log(error);
      console.log(enteredValue1);
      alert("something wrong");
      console.log(this.s);
      
    }
     )
  }

  addToCart(product: Book) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

  SearchByAuthorname(enteredValue2:string){

    this.bookserv.searchbyAuthorname(enteredValue2).subscribe(response =>{
      console.log(response);
      console.log(enteredValue2);
      console.log(this.books);
     this.books=null;
      this.books = response as Book[];
    
     },
     function (error) {
      console.log(error);
      console.log(enteredValue2);
      alert("something wrong");
      console.log(this.s);
      
    }
     )
  }
  SearchByPublisher(enteredValue3:string){

    this.bookserv.searchbyPublisher(enteredValue3).subscribe(response =>{
      console.log(response);
      console.log(enteredValue3);
      console.log(this.books);
     
      this.books = response as Book[];
    
     },
     function (error) {
      console.log(error);
      console.log(enteredValue3);
      alert("something wrong");
      console.log(this.s);
      
    }
     )
  }



  constructor(private bookserv: BookService , private route: ActivatedRoute,
    private cartService: CartService) { }

  ngOnInit(): void {
  }

}
