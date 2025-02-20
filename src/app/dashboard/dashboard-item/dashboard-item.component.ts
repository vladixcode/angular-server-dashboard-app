import { Component, input } from '@angular/core'
// import { Input } from '@angular/core'

@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css',
})
export class DashboardItemComponent {
  // Input decorators
  // @Input({ required: true }) image!: { src: string; alt: string }
  // @Input({ required: true }) title!: string

  // Input function - Angular >= 17.1
  image = input.required<{ src: string; alt: string }>()
  title = input.required<string>()
}
