import { Component, ElementRef, inject, input, ViewEncapsulation } from '@angular/core'

// import { HostBinding, HostListener } from '@angular/core'

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()',
  },
})
export class ControlComponent {
  // @HostBinding('class') className = 'control'

  // @HostListener('click') onClick() {
  //   console.log('click')
  // }
  label = input.required<string>()

  private hostElement = inject(ElementRef)

  onClick() {
    console.log('click')
    console.log(this.hostElement)
  }
}
