import { Component } from '@angular/core';
import { DefaultDashboardButton } from "../../components/default-dashboard-button/default-dashboard-button";

@Component({
  selector: 'app-dashboard',
  imports: [DefaultDashboardButton],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {

}
