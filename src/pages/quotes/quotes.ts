import {Component, OnInit} from '@angular/core';
import {NavController, NavParams, AlertController} from 'ionic-angular';
import {Quote} from "../../data/quote.interface";
import {QuoteService} from "../../services/quotes";
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html'
})
export class QuotesPage implements  OnInit{

  quoteGroup : { category: string,  quotes: Quote[], icon: string };

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private alertCtrl : AlertController,
              private quoteService : QuoteService
  ) {}
  ngOnInit(){
    this.quoteGroup = this.navParams.data;
  }
  addToFavorite(quote : Quote){
    const confirmAlert = this.alertCtrl.create({
        title: 'Add Quote',
        message: 'You will add this quote to your favorite list!',
        buttons: [
          {
            text: 'Cancel'
          },
          {
            text: 'OK',
            handler: () =>{
              this.quoteService.addToFavorite(quote);
            }
          }

        ]
    });
    confirmAlert.present();

  }

  removeFromFavorite(quote: Quote){
      this.quoteService.removeFromFavorite(quote);
  }

  isFavorite(quote: Quote){
      return this.quoteService.isFavorite(quote);
  }
}
