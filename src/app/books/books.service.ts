import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { BooksModel } from "./models/books.model";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";

const appKey = "kid_rkQIJij8U";
const booksUrl = `https://baas.kinvey.com/appdata/${appKey}/books/`;

@Injectable()
export class BooksService {
  constructor(
    private http: HttpClient,
    private toastr: ToastrService,
    private router: Router
  ) {}

  getAllBooks() {
    return this.http.get<BooksModel[]>(booksUrl);
  }

  createBook(body: BooksModel) {
    return this.http.post(booksUrl, body).subscribe(
      (data) => {
        this.toastr.success("Successfully created!", "Success");
        this.router.navigate(["books/all"]);
      },
      (err) => {
        this.toastr.error(err.error.description, "Error");
      }
    );
  }

  getBookDetails(id: string) {
    return this.http.get<BooksModel>(booksUrl + id);
  }

  deleteBook(id: string) {
    return this.http.delete(booksUrl + id).subscribe(
      (data) => {
        this.router.navigate(["books/all"]);
        this.toastr.success("Successfully deleted!", "Success");
      },
      (err) => {
        this.toastr.error(err.error.description, "Error");
      }
    );
  }

  editBook(id: string, body) {
    return this.http.put(booksUrl + id, body).subscribe(
      (data) => {
        this.toastr.success("Successfully edited!", "Success");
        this.router.navigate(["books/all"]);
      },
      (err) => {
        this.toastr.error(err.error.description, "Error");
      }
    );
  }

  getBookById(id: string) {
    return this.http.get<BooksModel>(booksUrl + id);
  }
}
