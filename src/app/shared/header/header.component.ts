import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/auth/auth.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  dropdown: string = "dropdown-menu";
  constructor(public authService: AuthService) {}

  ngOnInit(): void {}

  toggle() {
    this.dropdown.endsWith("show")
      ? (this.dropdown = "dropdown-menu")
      : (this.dropdown = "dropdown-menu show");
  }

  logout() {
    this.authService.logout();
  }
}
