import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import {LibraryPage} from "../pages/library/library";
import {QuotePage} from "../pages/quote/quote";
import {QuotesPage} from "../pages/quotes/quotes";
import {FavoritesPage} from "../pages/favorites/favorites";
import {SettingsPage} from "../pages/settings/settings";
import {TabsPage} from "../pages/tabs/tabs";
import {QuoteService} from "../services/quotes";
import {BackgroundService} from "../services/background";



@NgModule({
  declarations: [
    MyApp,
    LibraryPage,
    QuotePage,
    QuotesPage,
    FavoritesPage,
    SettingsPage,
    TabsPage,

  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LibraryPage,
    QuotePage,
    QuotesPage,
    FavoritesPage,
    SettingsPage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},
    QuoteService, BackgroundService
  ]
})
export class AppModule {}
