import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Reader from './entity/Reader';



const BASE_URL = "https://zbii4ztg30.execute-api.us-west-2.amazonaws.com/bookmanagement/purchasebook";


@Injectable({
  providedIn: 'root'
})
export class RedaerServiceService {

  orderBook(r: Reader) {

    return this.http.post(BASE_URL, r);


  }

  constructor(private http: HttpClient) { }
}
