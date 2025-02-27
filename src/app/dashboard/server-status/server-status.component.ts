import { Component, effect, OnInit, signal } from '@angular/core'

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
export class ServerStatusComponent implements OnInit {
  // currentStatus: `${ServerStatusEnum}` = ServerStatusEnum.Online

  currentStatus = signal<`${ServerStatusEnum}`>(ServerStatusEnum.Online)

  constructor() {
    effect(() => {
      console.log('Signal change:', this.currentStatus())
    })
  }

  ngOnInit() {
    setInterval(() => {
      const rnd = Math.random() // 0 - 0.99999999 (1 excluded)

      if (rnd < 0.5) {
        // 50% of all cases
        // this.currentStatus = ServerStatusEnum.Online
        this.currentStatus.set(ServerStatusEnum.Online)
      } else if (rnd < 0.9) {
        // this.currentStatus = ServerStatusEnum.Offline
        this.currentStatus.set(ServerStatusEnum.Offline)
      } else {
        // this.currentStatus = ServerStatusEnum.Unknown
        this.currentStatus.set(ServerStatusEnum.Unknown)
      }
    }, 5000)
  }

  public get ServerStatusEnum() {
    return ServerStatusEnum
  }
}
