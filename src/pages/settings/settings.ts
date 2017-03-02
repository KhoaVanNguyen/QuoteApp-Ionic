import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Toggle } from 'ionic-angular';
import {BackgroundService} from "../../services/background";
/*
  Generated class for the Settings page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {


  constructor(public navCtrl: NavController, public navParams: NavParams ,  private backgroundService: BackgroundService ) {}

  onToggle( event: Toggle ){
    console.log(event.checked)
      this.backgroundService.changeBackground(event.checked);
  }

  isChange(){
    console.log(this.backgroundService.getStatus());
    return this.backgroundService.getStatus();
  }
}
