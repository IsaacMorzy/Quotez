import { Quotes } from './../quotez';
import { Component, OnInit , Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  newQuote = new Quotes ( '',  '', '', 9, 0);
  @Output() saveQuote = new EventEmitter<Quotes>();

  addQuote() {
     this.saveQuote.emit(this.newQuote);
   }
  constructor() { }

   ngOnInit() {
   }

}
