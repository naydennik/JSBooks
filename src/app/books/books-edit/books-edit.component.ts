import { Component, OnInit } from "@angular/core";
import { BooksModel } from "../models/books.model";
import { BooksService } from "../books.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-books-edit",
  providers: [BooksService],
  templateUrl: "./books-edit.component.html",
  styleUrls: ["./books-edit.component.css"],
})
export class BooksEditComponent implements OnInit {
  editModel: BooksModel;
  id: string;

  constructor(
    private booksService: BooksService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.booksService
      .getBookById(this.route.snapshot.params["id"])
      .subscribe((data) => {
        this.editModel = data;
      });
  }

  edit() {
    const currentId = this.route.snapshot.params["id"];
    this.booksService.editBook(currentId, this.editModel);
  }
}
