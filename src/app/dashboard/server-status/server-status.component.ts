import { Component } from '@angular/core'

export enum ServerStatusEnum {
  Online = 'online',
  Offline = 'offline',
  Unknown = 'unknown',
}
@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent {
  currentStatus: `${ServerStatusEnum}` = 'online'

  constructor() {
    setInterval(() => {
      const rnd = Math.random() // 0 - 0.99999999 (1 excluded)

      if (rnd < 0.5) {
        // 50% of all cases
        this.currentStatus = 'online'
      } else if (rnd < 0.9) {
        this.currentStatus = 'offline'
      } else {
        this.currentStatus = 'unknown'
      }
    }, 5000)
  }

  public get ServerStatusEnum() {
    return ServerStatusEnum
  }
}
