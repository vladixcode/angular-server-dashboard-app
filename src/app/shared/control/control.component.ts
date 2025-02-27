import {
  AfterContentInit,
  afterNextRender,
  afterRender,
  Component,
  contentChild,
  // ContentChild,
  ElementRef,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core'

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
export class ControlComponent implements AfterContentInit {
  // @HostBinding('class') className = 'control'

  // @HostListener('click') onClick() {
  //   console.log('click')
  // }
  label = input.required<string>()

  private hostElement = inject(ElementRef)

  // @ContentChild('inputEl') private controlElement?: ElementRef<
  //   HTMLInputElement | HTMLTextAreaElement
  // >

  constructor() {
    afterRender(() => {
      console.log('After Render')
    })

    afterNextRender(() => {
      console.log('After Next Render')
    })
  }

  ngAfterContentInit(): void {
    console.log(this.controlElement)
  }

  private controlElement =
    contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('inputEl')

  onClick() {
    console.log('click')
    console.log(this.hostElement)
    console.log(this.controlElement())
  }
}
