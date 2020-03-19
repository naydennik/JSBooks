import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BooksAllComponent } from "./books-all/books-all.component";
import { BooksCreateComponent } from "./books-create/books-create.component";
import { BooksDetailsComponent } from "./books-details/books-details.component";
import { BooksEditComponent } from "./books-edit/books-edit.component";
import { FormsModule } from "@angular/forms";
import { NgxPaginationModule } from "ngx-pagination";
import { BooksRoutingModule } from "./books-routing.module";

@NgModule({
  declarations: [
    BooksAllComponent,
    BooksCreateComponent,
    BooksDetailsComponent,
    BooksEditComponent
  ],
  imports: [CommonModule, FormsModule, NgxPaginationModule, BooksRoutingModule]
})
export class BooksModule {}
