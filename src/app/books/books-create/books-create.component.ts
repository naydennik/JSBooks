import { Component, OnInit } from "@angular/core";
import { BooksService } from "../books.service";
import { CreateModel } from "../models/create.model";

@Component({
  selector: "app-books-create",
  providers: [BooksService],
  templateUrl: "./books-create.component.html",
  styleUrls: ["./books-create.component.css"],
})
export class BooksCreateComponent implements OnInit {
  createModel: CreateModel;

  constructor(private booksService: BooksService) {
    this.createModel = new CreateModel(
      "",
      "",
      "",
      "",
      null,
      "",
      "",
      "",
      "",
      ""
    );
  }

  ngOnInit(): void {}

  create() {
    this.booksService.createBook(this.createModel);
  }
}
