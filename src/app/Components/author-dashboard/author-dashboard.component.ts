import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/book.service';
import { Book } from 'src/app/entity/book';
import { TransferService } from 'src/app/transfer.service';



@Component({
  selector: 'app-author-dashboard',
  templateUrl: './author-dashboard.component.html',
  styleUrls: ['./author-dashboard.component.css']
})
export class AuthorDashboardComponent implements OnInit {

  books: Book[] = [];
  name:string;

  userData: any = history.state.data;
  b={
    bookId:0,
    authorId:0,
    title:"",
    authorName:"",
    category:"",
    price: 0,
    content: "",
    publishedDate:"",
    publisher: "",
    logo: "",
    bookStatus: ''

  }

bres : Book = new Book();

  getRecordsofBook(id: number){

    this.bs.getBookDataByBookId(id).subscribe(response => {
      console.log(response);
     this.bres = response as Book;
     console.log(this.bres);

    },
      function (error) {
        console.log(error);
        
      
        alert("Something went wrong!");
      }

    )

  }

  getRecords(obj) {
    this.b = obj;
    console.log("recordss");
    console.log(this.b);
  }
 name2 : string = this.userData.authorName;
 
  getyourBooks(name: string){

    const promise = this.bs.searchbyAuthorname(name);
    promise.subscribe((response) => {
      console.log(response);
      console.log("abhishek entered below")
      console.log(name);
      this.books = response as Book[];

    })
  }


  updateBook(bid: number) {

    const observable = this.bs.updateBookById(bid, this.bres);
    observable.subscribe(
      (response) => {
        console.log(response);
        console.log(this.bres);
        alert("Data updated successfully!");
      },
      function (error) {
        console.log(error);
        alert("Something went wrong!");
      }
    )
  }

  deleteStudent(bid: number) {
    this.bs.deleteBookByBookId(bid).subscribe(response => {
      console.log(response);
      
      alert("Book Id " +bid +" Deleted successfully!");

    },
      function (error) {
        console.log(error);
        console.log("idgoing");
        console.log(bid);
        alert("Something went wrong!");
      }

    )

  }

  constructor(public bs : BookService , private ts: TransferService ,private router:Router) { }

  ngOnInit(): void {
    const promise = this.bs.searchbyAuthorname(this.name2);
    promise.subscribe((response) => {
      console.log(response);
      this.books = response as Book[];

  })

}
}

