import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { BooksAllComponent } from "./books-all/books-all.component";
import { BooksCreateComponent } from "./books-create/books-create.component";
import { BooksDetailsComponent } from "./books-details/books-details.component";
import { BooksEditComponent } from "./books-edit/books-edit.component";

const routes: Route[] = [
  { path: "all", component: BooksAllComponent },
  { path: "create", component: BooksCreateComponent },
  {
    path: "details/:id",
    component: BooksDetailsComponent,
  },

  { path: "details/:id/edit", component: BooksEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksRoutingModule {}
