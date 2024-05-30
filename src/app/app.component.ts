import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { NavbarComponent } from "./navbar/navbar.component";
import { AvailableAgentsComponent } from "./available-agents/available-agents.component";

@Component({
  selector: "app-root",

  standalone: true,
  imports: [RouterOutlet, NavbarComponent, AvailableAgentsComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "ecommerce-app";
}
