import { Quote } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  newQuote=new Quote(0,new Date(),"","","",0,0)
  @Output() addQuote= new EventEmitter<Quote>();

  onSubmit(form: NgForm){
    var check=this.newQuote;
    
    this.addQuote.emit(this.newQuote);
    form.resetForm(); 
  }
  constructor() { }

  ngOnInit() {
  }

}
