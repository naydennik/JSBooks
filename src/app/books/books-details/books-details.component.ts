import { Component, OnInit } from "@angular/core";
import { BooksModel } from "../models/books.model";
import { BooksService } from "../books.service";
import { ActivatedRoute } from "@angular/router";
import { AuthService } from "src/app/auth/auth.service";

@Component({
  selector: "app-books-details",
  providers: [BooksService],
  templateUrl: "./books-details.component.html",
  styleUrls: ["./books-details.component.css"],
})
export class BooksDetailsComponent implements OnInit {
  book: BooksModel;
  id: string;
  constructor(
    private booksService: BooksService,
    private route: ActivatedRoute,
    public authService: AuthService
  ) {
    this.id = this.route.snapshot.params["id"];
  }

  ngOnInit(): void {
    this.booksService.getBookDetails(this.id).subscribe((data) => {
      this.book = data;
    });
  }
  delete() {
    this.booksService.deleteBook(this.id);
  }
}
