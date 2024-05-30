import { Component } from "@angular/core";
import { ShippingAgentCardComponent } from "../active-shipping-agent-card/shipping-agent-card.component";
import { InactiveShippingAgentCardComponent } from "../inactive-shipping-agent-card/inactive-shipping-agent-card.component";

@Component({
  selector: "app-available-agents",
  standalone: true,
  imports: [ShippingAgentCardComponent, InactiveShippingAgentCardComponent],
  templateUrl: "./available-agents.component.html",
  styleUrl: "./available-agents.component.scss",
})
export class AvailableAgentsComponent {}
