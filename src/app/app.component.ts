import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes: string[];
  
  title = 'Quotes';

  constructor(){
    
    this.quotes = ['"I had a dream"','"age aint nothing but a number"']

  }
  

}
