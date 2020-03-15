import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RegisterComponent } from "./auth/register/register.component";
import { LoginComponent } from "./auth/login/login.component";
import { BooksAllComponent } from "./books/books-all/books-all.component";
import { BooksCreateComponent } from "./books/books-create/books-create.component";
import { BooksDetailsComponent } from "./books/books-details/books-details.component";
import { BooksEditComponent } from "./books/books-edit/books-edit.component";
import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home.component";
import { AuthGuard } from "./guards/auth.guard";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: HomeComponent
  },
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  {
    path: "auth",
    children: [
      { path: "register", component: RegisterComponent },
      { path: "login", component: LoginComponent }
    ]
  },
  {
    path: "books",
    children: [
      { path: "all", component: BooksAllComponent },
      { path: "create", component: BooksCreateComponent },
      {
        path: "details/:id",
        component: BooksDetailsComponent
      },

      { path: "details/:id/edit", component: BooksEditComponent }
    ],
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
