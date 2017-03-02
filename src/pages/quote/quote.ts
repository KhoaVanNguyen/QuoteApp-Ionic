import { Component } from '@angular/core';
import {ViewController, NavParams} from "ionic-angular";
import {Quote} from "../../data/quote.interface";
import {QuoteService} from "../../services/quotes";

@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html'
})
export class QuotePage {

  // person: string;
  // text: string;

  quote?: Quote;
  constructor(private viewCtrl : ViewController,
              private navParams: NavParams,
              private quoteService : QuoteService
  ) {}

  ionViewDidLoad() {
    // this.person = this.navParams.data.person;
    // this.text = this.navParams.data.text;
    this.quote = this.navParams.data;
  }
  onClose(remove: boolean){
    this.viewCtrl.dismiss(remove);
  }

  // onClose(){
  //   this.viewCtrl.dismiss();
  // }

}
