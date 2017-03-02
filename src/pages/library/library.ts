import {Component, OnInit} from '@angular/core';
import {Quote} from "../../data/quote.interface";
import quotes from "../../data/quotes";
import {NavController} from "ionic-angular";
import {QuotesPage} from "../quotes/quotes";
@Component({
  selector: 'page-library',
  templateUrl: 'library.html'
})
export class LibraryPage implements  OnInit{
  quoteCollection: { category: string,  quotes: Quote[], icon: string }[];
  quotesPage = QuotesPage;
  constructor(private navCtrl : NavController){

  }

  ngOnInit(){
    this.quoteCollection = quotes;
  }


  // goToQuoteList(category : string){
  //   this.navCtrl.push(QuotesPage,category);
  // }

}
