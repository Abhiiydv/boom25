import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Author } from 'src/app/entity/Author';
import { SignupService } from 'src/app/signup.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  au : Author  = new Author();
  constructor(public signupserv: SignupService) { }


  saveAu(){

  const observable= this.signupserv.save(this.au);
observable.subscribe((response)=>{
  console.log(response);
  console.log(this.au);
  alert("Account created!");
},
function(error){
  console.log(error);
  alert("Something wrong");
}
)
}

  ngOnInit(): void {
  }

}
