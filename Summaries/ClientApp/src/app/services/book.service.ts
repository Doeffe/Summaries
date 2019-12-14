import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  _baseUrl :string = "api/Books";

  constructor(private http:HttpClient) { }

  getAllBooks(){
    return this.http.get<Book[]>(this._baseUrl+"/GetBooks");
  }
}
