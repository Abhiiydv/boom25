import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { BookService } from './book.service';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  constructor(private router: Router , private bookserv: BookService ) { }

 private data;
 setData(data){
  this.data=data;
 }
 getData(){
  let temp = this.data;
  this.clearData();
  return temp;
 }
 clearData(){
  this.data=undefined;
 }




}
