import { Quotes} from './../quotez';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  @Input() quote: Quotes;
  @Output() isDelete = new EventEmitter <boolean>();

  quotes = [
    new Quotes ('Ralph Charell', 'Avoid the crowd. Do your own thinking independently', 'k', 7 , 9, ),
    new Quotes ('Vladimir Putin', 'Chess is the gymnasium of the mind', 'joel', 8 , 9)
  ];
  quoteDelete(complete: boolean) {
    this.isDelete.emit(complete);
  }

  constructor() { }


  ngOnInit() {
  }

}
