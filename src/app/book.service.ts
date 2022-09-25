import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Author } from './entity/Author';
import { Book } from './entity/book';

const MAIN_URL = "https://zbii4ztg30.execute-api.us-west-2.amazonaws.com/bookmanagement/";
const BASE_URL = "http://ec2-35-92-189-97.us-west-2.compute.amazonaws.com:9092/savebook"
//const BASE_URL = "https://zbii4ztg30.execute-api.us-west-2.amazonaws.com/bookmanagement/"
                
const GET_DATA_BY_BID ="https://zbii4ztg30.execute-api.us-west-2.amazonaws.com/bookmanagement/getbook/";
const SEARCH_BY_Category = "https://zbii4ztg30.execute-api.us-west-2.amazonaws.com/bookmanagement/";
const SEARCH_BY_AuthorName = "https://zbii4ztg30.execute-api.us-west-2.amazonaws.com/bookmanagement/getbookbyauthor/";
const SEARCH_BY_Publisher = "https://zbii4ztg30.execute-api.us-west-2.amazonaws.com/bookmanagement/getbookbypublisher/";
const FindActiveBooks = "https://zbii4ztg30.execute-api.us-west-2.amazonaws.com/bookmanagement/getactivebook";

//const SEARCH_BY_ANYTHING = "https://zbii4ztg30.execute-api.us-west-2.amazonaws.com/bookmanagement/getactivebook/searchanything/";
const SEARCH_BY_ANYTHING = "http://ec2-35-92-189-97.us-west-2.compute.amazonaws.com:9092/searchbooks/?query=";
const UPDATE_BOOK_BY_BOOKID ="https://zbii4ztg30.execute-api.us-west-2.amazonaws.com/bookmanagement/updatebook/";
const DELETE_BY_BOOKID ="https://zbii4ztg30.execute-api.us-west-2.amazonaws.com/bookmanagement/deletebook/";
const login_url ="https://zbii4ztg30.execute-api.us-west-2.amazonaws.com/bookmanagement/login";
const PURCHASED_BOOKS_URL ="https://zbii4ztg30.execute-api.us-west-2.amazonaws.com/bookmanagement/purchasedbooks/";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  createBook(book: Book, uploadedImage: File) {
    const formData = new FormData();
    formData.append('bookstring', JSON.stringify(book));

    formData.append('image', uploadedImage);

    return this.http.post(BASE_URL, formData);
  }

  getActiveBooks() {
    return this.http.get(FindActiveBooks);
  }

  getBookslist() {
    return this.http.get(MAIN_URL);
  }
  searchbyCategory(enteredValue1: string): Observable<Object> {
    return this.http.get(SEARCH_BY_Category + enteredValue1);

  }
  searchbyAuthorname(enteredValue2: string): Observable<Object> {
    return this.http.get(SEARCH_BY_AuthorName + enteredValue2);
  }

  searchbyPublisher(enteredValue3: string): Observable<Object> {
    return this.http.get(SEARCH_BY_Publisher + enteredValue3);

  }
  getPurchasedBooks(readerEmailId:string): Observable<Object> {
    return this.http.get(PURCHASED_BOOKS_URL + readerEmailId);
    }

  getBookDataByBookId(id :number): Observable<Object> {
    return this.http.get(GET_DATA_BY_BID + id);
  }

  getLogin(a : Author)
  {

    return this.http.post(login_url, a);
    
  }


  searchbyAnything(query: string): Observable<Object> {
    return this.http.get(SEARCH_BY_ANYTHING + query);
  }


  updateBookById(id:number , b: Book): Observable<Object>{
    return this.http.put(UPDATE_BOOK_BY_BOOKID + id, b);
    }

    deleteBookByBookId( bookId  ): Observable<Object>
    {
      return this.http.delete(DELETE_BY_BOOKID+ bookId);
     }

  constructor(public http: HttpClient) { }
}
