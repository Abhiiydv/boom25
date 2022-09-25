import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/book.service';
import { Book } from 'src/app/entity/book';

@Component({
  selector: 'app-purchasedbooks',
  templateUrl: './purchasedbooks.component.html',
  styleUrls: ['./purchasedbooks.component.css']
})
export class PurchasedbooksComponent implements OnInit {


  email:string;
  bIds:  number[] = [];


 
  getBookIds(email:string){

    this.bs.getPurchasedBooks(email).subscribe(response =>{
    console.log(response);
    console.log(email);
    this.bIds = response as [];
    console.log(this.bIds);
 
   
    
  
   },
   function (error) {
    console.log(error);
    console.log(email);
    alert("something wrong");
    console.log(this.s);
    
  }
   )
}
b:Book = new Book();
books: Book[] = [];
i:number;


getBookDataforEachId(id:number){
  this.bs.getBookDataByBookId(id).subscribe(response =>{
    console.log(response);
    console.log(id);
    //this.books = response as Book[];   
  this.b = response as Book;  
  
   },
   function (error) {
    console.log(error);
    console.log(id);
    alert("something wrong");
    console.log(this.s);
    
  }
   )
}


  constructor(private bs: BookService) { }

  ngOnInit(): void {
  }

}
