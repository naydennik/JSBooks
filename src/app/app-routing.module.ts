import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { AuthGuard } from "./guards/auth.guard";
import { BooksModule } from "./books/books.module";
import { AuthRoutingModule } from "./auth/auth-routing.module";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: HomeComponent,
  },
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  {
    path: "auth",
    loadChildren: () => AuthRoutingModule,
  },
  {
    path: "books",
    loadChildren: () => BooksModule,
    canActivate: [AuthGuard],
  },
  {
    path: "**",
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
