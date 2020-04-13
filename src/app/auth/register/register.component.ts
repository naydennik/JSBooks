import { Component, OnInit } from "@angular/core";
import { RegisterModel } from "../models/register.model";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  model: RegisterModel;
  registerFailed: boolean;

  constructor(private authService: AuthService) {
    this.model = new RegisterModel("", "", "", "", "", "");
  }

  ngOnInit(): void {}

  register() {
    this.authService.register(this.model);
  }
}
