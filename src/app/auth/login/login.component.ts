import { Component, OnInit } from "@angular/core";
import { LoginModel } from "../models/login.model";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  model: LoginModel;

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.model = new LoginModel("", "");
  }

  ngOnInit(): void {}

  login() {
    this.authService.login(this.model).subscribe(
      (data) => {
        console.log(data);
        this.router.navigate(["books/all"]);
        this.toastr.success("Successfully logged in!", "Success");
      },
      (err) => {
        this.toastr.error(err.error.description, "Error");
      }
    );
  }
}
