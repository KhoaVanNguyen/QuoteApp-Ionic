import {Component, OnInit} from '@angular/core';
//import { NavController, NavParams } from 'ionic-angular';
import {QuoteService} from "../../services/quotes";
import {ModalController} from "ionic-angular";
import {Quote} from "../../data/quote.interface";
import {QuotePage} from "../quote/quote";
import {BackgroundService} from "../../services/background";
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html'
})
export class FavoritesPage implements  OnInit{
  favoriteQuotes: Quote[];
  constructor( private quoteService: QuoteService,
               private modalCtrl : ModalController,
               private backgroundService: BackgroundService
  ) {}

  ngOnInit(){
    // this.favoriteQuotes = this.quoteService.getFavoriteQuotes();
  }

  ionViewDidEnter(){
    this.favoriteQuotes = this.quoteService.getFavoriteQuotes();
  }

  goToEditModel( quote: Quote){
    const modal = this.modalCtrl.create(QuotePage,quote);
    modal.present();

    modal.onDidDismiss( ( remove: boolean ) => {

      if ( remove == true ){
        this.quoteService.removeFromFavorite(quote);
        this.favoriteQuotes = this.quoteService.getFavoriteQuotes();
      }

    } );
  }
  onRemoveFromFavorites(quote: Quote){
    console.log(this.quoteService.getFavoriteQuotes().length);
    this.quoteService.removeFromFavorite(quote);
    this.favoriteQuotes = this.quoteService.getFavoriteQuotes();
  }

  getBackgroundColor(){
    return this.backgroundService.getStatus() ? "quoteBackground" : "altQuoteBackground";
  }
}
