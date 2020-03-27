import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { BooksModel } from "./models/books.model";

const appKey = "kid_rkQIJij8U";
const booksUrl = `https://baas.kinvey.com/appdata/${appKey}/books/`;

@Injectable()
export class BooksService {
  constructor(private http: HttpClient) {}

  getAllBooks() {
    return this.http.get<BooksModel[]>(booksUrl);
  }

  createBook(body: BooksModel) {
    return this.http.post(booksUrl, body);
  }

  getBookDetails(id: string) {
    return this.http.get<BooksModel>(booksUrl + id);
  }

  deleteBook(id: string) {
    return this.http.delete(booksUrl + id);
  }

  editBook(id: string, body) {
    return this.http.put(booksUrl + id, body);
  }

  getBookById(id: string) {
    return this.http.get<BooksModel>(booksUrl + id);
  }
}
