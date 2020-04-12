import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/auth/auth.service";

@Component({
  selector: "app-not-found",
  templateUrl: "./not-found.component.html",
  styleUrls: ["./not-found.component.css"],
})
export class NotFoundComponent implements OnInit {
  constructor(public authService: AuthService) {}

  ngOnInit(): void {}
}
