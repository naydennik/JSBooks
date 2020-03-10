import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  dropdown: string = "dropdown-menu";
  constructor() {}

  ngOnInit(): void {}

  toggle() {
    this.dropdown.endsWith("show")
      ? (this.dropdown = "dropdown-menu")
      : (this.dropdown = "dropdown-menu show");
  }
}
