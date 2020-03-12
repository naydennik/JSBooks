import { Component, OnInit } from "@angular/core";
import { RegisterModel } from "../models/register.model";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  model: RegisterModel;
  registerFailed: boolean;
  errMessage: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.model = new RegisterModel("", "", "", "", "", "");
  }

  ngOnInit(): void {}

  register() {
    this.authService.register(this.model).subscribe(
      data => {
        this.router.navigate(["auth/login"]);
        this.toastr.success("Successfully registerd!", "Success");
      },
      err => {
        this.errMessage = err.error.description;
        this.toastr.error(err.error.description, "Error");
      }
    );
  }
}
