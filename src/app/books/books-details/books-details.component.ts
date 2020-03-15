import { Component, OnInit } from "@angular/core";
import { BooksModel } from "../models/books.model";
import { BooksService } from "../books.service";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { AuthService } from "src/app/auth/auth.service";

@Component({
  selector: "app-books-details",
  providers: [BooksService],
  templateUrl: "./books-details.component.html",
  styleUrls: ["./books-details.component.css"]
})
export class BooksDetailsComponent implements OnInit {
  book: BooksModel;
  id: string;
  constructor(
    private booksService: BooksService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    public authService: AuthService
  ) {
    this.id = this.route.snapshot.params["id"];
  }

  ngOnInit(): void {
    this.booksService.getBookDetails(this.id).subscribe(data => {
      this.book = data;
    });
  }
  delete() {
    const currentId = this.route.snapshot.params["id"];
    this.booksService.deleteBook(currentId).subscribe(
      data => {
        this.router.navigate(["books/all"]);
        this.toastr.success("Successfully deleted!", "Success");
      },
      err => {
        this.toastr.error(err.error.description, "Error");
      }
    );
  }
}
