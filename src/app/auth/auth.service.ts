import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { LoginModel } from "./models/login.model";
import { RegisterModel } from "./models/register.model";

const appKey = "kid_rkQIJij8U";
const adminId = "5e7e26e535ddd40016cdc370";
const registerUrl = `https://baas.kinvey.com/user/${appKey}`;
const loginUrl = `https://baas.kinvey.com/user/${appKey}/login`;
const logoutUrl = `https://baas.kinvey.com/user/${appKey}/_logout`;

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private currentAuthtoken: string;

  constructor(private http: HttpClient) {}

  login(model: LoginModel) {
    return this.http.post(loginUrl, JSON.stringify(model));
  }

  register(model: RegisterModel) {
    return this.http.post(registerUrl, JSON.stringify(model));
  }

  logout() {
    return this.http.post(logoutUrl, {});
  }

  checkIfLogged() {
    // return sessionStorage.getItem("authtoken") === this.currentAuthtoken;
    return sessionStorage.getItem("authtoken") !== null;
  }

  checkIfAdmin() {
    return sessionStorage.getItem("id") === adminId;
  }

  get authtoken() {
    return this.currentAuthtoken;
  }

  set authtoken(value: string) {
    this.currentAuthtoken = value;
  }
}
