import { Component, OnInit } from "@angular/core";
import { BooksService } from "../books.service";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { CreateModel } from "../models/create.model";

@Component({
  selector: "app-books-create",
  providers: [BooksService],
  templateUrl: "./books-create.component.html",
  styleUrls: ["./books-create.component.css"]
})
export class BooksCreateComponent implements OnInit {
  createModel: CreateModel;

  constructor(
    private booksService: BooksService,
    private router: Router,
    private toastr: ToastrService
  ) {
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
    this.booksService.createBook(this.createModel).subscribe(
      data => {
        this.toastr.success("Successfully created!", "Success");
        this.router.navigate(["books/all"]);
      },
      err => {
        this.toastr.error(err.error.description, "Error");
      }
    );
  }
}
