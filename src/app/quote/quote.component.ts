import { Quotes } from './../quotez';
import { Component, OnInit, } from '@angular/core';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
    new Quotes('Isaac', 'Life is beautiful', 'John Watson', 9 , 0),
    new Quotes('John', 'Shiko is beautiful', 'joel', 8 , 9)
  ];



 deleteQuote(isDelete, index) {
   if (isDelete) {
  const toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].quote}`);
  }
  if (isDelete) {
      this.quotes.splice(index, 1);
    }
  }
  addQuote(quote: Quotes) {
    const quoteLength = this.quotes.length;
    quote.timeCreated = quoteLength + 1;
    this.quotes.push(quote);
  }
  upVote(i) {
    this.quotes[i].upVotes += 1;

  }
  downVote(i) {
this.quotes[i].downVotes -= 1;
  }

    constructor() {}

    ngOnInit() {
    }

   }

