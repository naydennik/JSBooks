import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { LoginModel } from "./models/login.model";
import { RegisterModel } from "./models/register.model";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

const appKey = "kid_rkQIJij8U";
const adminId = "5e7e26e535ddd40016cdc370";
const registerUrl = `https://baas.kinvey.com/user/${appKey}`;
const loginUrl = `https://baas.kinvey.com/user/${appKey}/login`;
const logoutUrl = `https://baas.kinvey.com/user/${appKey}/_logout`;

@Injectable({
  providedIn: "root",
})
export class AuthService {
  errMessage: string;

  constructor(
    private http: HttpClient,
    private router: Router,
    private toastr: ToastrService
  ) {}

  login(model: LoginModel) {
    return this.http.post(loginUrl, JSON.stringify(model)).subscribe(
      (data) => {
        this.toastr.success("Successfully logged in!", "Success");
      },
      (err) => {
        this.toastr.error(err.error.description, "Error");
      }
    );
  }

  register(model: RegisterModel) {
    return this.http.post(registerUrl, JSON.stringify(model)).subscribe(
      (data) => {
        this.router.navigate(["auth/login"]);
        this.toastr.success("Successfully registered!", "Success");
      },
      (err) => {
        this.errMessage = err.error.description;
        this.toastr.error(err.error.description, "Error");
      }
    );
  }

  logout() {
    return this.http.post(logoutUrl, {}).subscribe(
      (data) => {
        sessionStorage.clear();
        this.router.navigate(["home"]);
        this.toastr.success("Successfully logged out!", "Success");
      },
      (err) => {
        this.toastr.error(err.error.description, "Error");
      }
    );
  }

  checkIfLogged() {
    return sessionStorage.getItem("authtoken") !== null;
  }

  checkIfAdmin() {
    return sessionStorage.getItem("id") === adminId;
  }
}
