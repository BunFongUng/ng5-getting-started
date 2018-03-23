import { Component, OnInit, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'app-new-card-input',
  templateUrl: './new-card-input.component.html',
  styleUrls: ['./new-card-input.component.scss'],
  // tslint:disable-next-line:use-host-property-decorator
  host: { class: 'col-4' }
})
export class NewCardInputComponent implements OnInit {
  @HostListener('document:keypress', ['$event'])
  @Output()
  cardAdd = new EventEmitter<string>();

  newCard: any = { text: '' };

  constructor() {}

  handlesKeyboardEvent(event: KeyboardEvent) {
    if (event.code === 'Enter' && this.newCard.text.length > 0) {
      // this.cardAdd.emit(this.newCard.text);
      // this.newCard.text = '';
    }
  }

  ngOnInit() {}
}
