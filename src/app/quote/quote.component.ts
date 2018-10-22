import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';
import { globalAgent } from 'https';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote (1,'Dr. Suess', '"You know youre in love when you cant fall asleep because reality is finally better than your dreams."',new Date (2017,4,14)),
    new Quote (2,'Stephen King', 'Get busy living or get busy dying.', new Date(2018,3,8)),
    new Quote (3,'Eleonor Roosevelt', '"Great minds dicsuss ideas; average minds discuss events; small minds discuss people', new Date(2016,4,7))
  ];

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id=quoteLength+1;
    quote.completeDate = new Date (quote.completeDate)
    this.quotes.push(quote)
  }
  
  completeQuote(isComplete,index){
    if (isComplete){
      this.quotes.splice(index,1);
    }
  }

  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  constructor() { }

  ngOnInit() {
  }

}
