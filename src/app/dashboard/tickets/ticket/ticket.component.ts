import { Component, input, signal } from '@angular/core'
import { Ticket } from './ticket.model'

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css',
})
export class TicketComponent {
  data = input.required<Ticket>()
  detailsVisable = signal(false)

  onToggleDetails() {
    // this.detailsVisable.set(!this.detailsVisable())
    this.detailsVisable.update((wasVisable) => !wasVisable)
  }
}
