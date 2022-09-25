import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Route, Router } from '@angular/router';
import { BookService } from 'src/app/book.service';
import { Author } from 'src/app/entity/Author';
import { TransferService } from 'src/app/transfer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;

  st : boolean = true;

 if(st){

 

 }
 
 au : Author = new Author();
 auName:string;
 returneduser : Author;
 login(){

 // console.log(this.au);
  const observable= this.bserv.getLogin(this.au);
  observable.subscribe((response)=>{
  console.log(response);
  this.returneduser=response as Author;
  console.log(this.returneduser);
  
  
 // console.log(this.au);

  if(response==null){
    this.router.navigate(['/home']);
    //this.auName = this.au.authorName;
  }
  else
  this.router.navigate(['/author-dashboard'],{state:{data:this.returneduser}});
  
  
},
function(error){
  console.log(error);
  alert("Something wrong");
}
)
}

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

 
  constructor(private bserv: BookService , private router : Router , private ts: TransferService) { }

  ngOnInit(): void {
  }

}
