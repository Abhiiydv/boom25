import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

import { Book } from '../entity/book';


@Component({
  selector: 'app-createbook',
  templateUrl: './createbook.component.html',
  styleUrls: ['./createbook.component.css']
})
export class CreatebookComponent implements OnInit {

  
 
  uploadedImage:File;
  book: Book= new Book();
 

 public onImageUpload(event) {
  this.uploadedImage = event.target.files[0];
}

  save(){
    const observable = this.bookservice.createBook(this.book,this.uploadedImage);
    observable.subscribe(
      (response) => {
        console.log(response);
        console.log(this.book);
        alert("Book added successfully!");
      },
      function(error){
        console.log(error);
        alert("Something went wrong!");
      }
    )
  }

  /* save(){
    const observable = this.bookservice.createBook(this.book);
    observable.subscribe(
      (response) => {
        console.log(response);
        console.log(this.book);
        alert("Book added successfully!");
      },
      function(error){
        console.log(error);
        alert("Something went wrong!");
      }
    )
  } */
  constructor(public bookservice : BookService) { }

  ngOnInit(): void {
  }

}
