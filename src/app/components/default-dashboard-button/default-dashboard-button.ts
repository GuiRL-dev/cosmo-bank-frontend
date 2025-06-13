import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-default-dashboard-button',
  imports: [],
  templateUrl: './default-dashboard-button.html',
  styleUrl: './default-dashboard-button.scss'
})
export class DefaultDashboardButton {
@Input() description: string = "";
@Input() image: string = "";
}
