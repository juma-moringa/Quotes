import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  title = 'Jays Wisdom Quotes.'
  quotes:Quote[]=[
    new Quote(1,new Date(2021,5,14),"Audrey","Juma Allan"," The purpose of our lives is to be happy.",0,0),
    new Quote(2,new Date(2021,5,28),"Natasha","Missisipi Troy"," Get busy living or get busy dying.",0,0),
    new Quote(3,new Date(2021,4,18),"Chebie","Antony Joshua"," You only live once, but if you do it right, once is enough.",0,0),
    new Quote(4,new Date(2021,3,7),"Aisha","Anisa Polly"," Never let the fear of striking out keep you from playing the game.",0,0),
    new Quote(5,new Date(2021,1,17),"Babe Ruth","Willy Am"," “Money and success don’t change people; they merely amplify what is already there.",0,0),
    new Quote(6,new Date(2021,2,14),"Audrey","Steve Jobs"," Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.",0,0),
    new Quote(7,new Date(2021,5,1),"Isabella","Trisha Alisson"," The big lesson in life, baby, is never be scared of anyone or anything.",0,0),
    new Quote(8,new Date(2021,4,19),"Ammoh skito","Oslo wils"," In order to write about life first you must live it.",0,0),
    new Quote(9,new Date(2021,5,14),"Miss lenno","Ajay lee","Don’t settle for what life gives you; make life better and build something",0,0),
    new Quote(10,new Date(2021,5,14),"Jossie","Christian dior","You never really learn much from hearing yourself speak ",0,0)
  ];


  addNewQuote(quote: { userName: string; author: string; quote: string; }){
    let quotesLength=this.quotes.length+1;

    let quoteObj=new Quote(quotesLength,new Date,quote.userName,quote.author,quote.quote,0,0,);

    this.quotes.push(quoteObj);
  }
  toggleDetails(index:any){
    this.quotes[index].showQuoteDetails=!this.quotes[index].showQuoteDetails
  }
  deleteQuote(isDeleted: any,index: any){

    if(isDeleted){
      let remove=confirm(`Are you sure you want to delete this ${this.quotes[index].quote}?`)
      if(remove){
        this.quotes.splice(index,1)
      }
    }

  }
  upvoteFunc(index: number){
    var up=this.quotes[index].upvote+1;
    this.quotes[index].upvote=up;
    
}


downvoteFunc(index:  number){
  var down=this.quotes[index].downvote+1;
  this.quotes[index].downvote=down;

}
  constructor() { }

  ngOnInit() {
  }

}
