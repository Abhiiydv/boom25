import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Author } from './entity/Author';

const MAIN_URL= "https://zbii4ztg30.execute-api.us-west-2.amazonaws.com/bookmanagement/saveauthor";

@Injectable({
  providedIn: 'root'
})
export class SignupService {

 
  save(a : Author): Observable<Object>{
    return this.http.post(MAIN_URL, a);
  }

  constructor(public http: HttpClient) { }
}
