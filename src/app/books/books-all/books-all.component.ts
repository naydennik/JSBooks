import { Component, OnInit, Injectable } from "@angular/core";

import { BooksModel } from "../models/books.model";
import { BooksService } from "../books.service";

@Component({
  selector: "app-books-all",
  providers: [BooksService],
  templateUrl: "./books-all.component.html",
  styleUrls: ["./books-all.component.css"],
})
@Injectable()
export class BooksAllComponent implements OnInit {
  books: BooksModel[];
  pageSize: number = 3;
  currentPage: number = 1;

  constructor(private booksService: BooksService) {}

  ngOnInit(): void {
    this.booksService.getAllBooks().subscribe((data) => {
      this.books = data;
    });
  }

  changePage(page) {
    this.currentPage = page;
  }
}
