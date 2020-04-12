import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/auth/auth.service";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  dropdown: string = "dropdown-menu";
  constructor(
    public authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  toggle() {
    this.dropdown.endsWith("show")
      ? (this.dropdown = "dropdown-menu")
      : (this.dropdown = "dropdown-menu show");
  }

  logout() {
    this.authService.logout().subscribe(
      (data) => {
        sessionStorage.clear();
        this.authService.authtoken = "";
        this.router.navigate(["home"]);
        this.toastr.success("Successfully logged out!", "Success");
      },
      (err) => {
        this.toastr.error(err.error.description, "Error");
      }
    );
  }
}
