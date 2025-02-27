import {
  AfterViewInit,
  Component,
  ElementRef,
  // EventEmitter,
  OnInit,
  output,
  // Output,
  viewChild,
  // ViewChild,
} from '@angular/core'
import { FormsModule } from '@angular/forms'

import { ButtonComponent } from '../../../shared/button/button.component'
import { ControlComponent } from '../../../shared/control/control.component'

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent implements OnInit, AfterViewInit {
  // @ViewChild('form') private formElement?: ElementRef<HTMLFormElement>

  // private formElement = viewChild<ElementRef<HTMLFormElement>>('form')

  private formElement = viewChild.required<ElementRef<HTMLFormElement>>('form')

  // @Output() add = new EventEmitter()
  add = output<{ title: string; text: string }>()

  enteredTitle = ''
  enteredText = ''

  ngOnInit(): void {
    console.log('On Init')
    // When using viewChild() method you will have access to this.formElement()
    // when using @ViewChild() decorator you will NOT have access to this.formElement
    console.log(this.formElement().nativeElement)
  }

  ngAfterViewInit(): void {
    console.log('After View Init')
    console.log(this.formElement().nativeElement)
  }

  onSubmit() {
    // this.formElement?.nativeElement.reset()

    this.add.emit({
      title: this.enteredTitle,
      text: this.enteredText,
    })

    // Reseting form with tempalte variables appraoch of extracting data from the from
    // this.formElement().nativeElement.reset()

    // Reseting form with Two-way binding appraoch
    this.enteredTitle = ''
    this.enteredText = ''
  }
}
