import {Quote} from "../data/quote.interface";
export class QuoteService{




    // static instance = new QuoteService();
    private quotes: Quote[] = [];


    addToFavorite( quote : Quote ){
        this.quotes.push(quote);
        console.log(  this.quotes.length  );
    }

    removeFromFavorite( quote: Quote ){
        const position = this.quotes.findIndex( (quoteElement: Quote) => {
           return quoteElement.id == quote.id;
        });

        this.quotes.splice(position,1);
    }
    getFavoriteQuotes(){
        return this.quotes.slice();
    }

    isFavorite(quote : Quote){
        return this.quotes.find( (quoteElement: Quote) => {
          return quoteElement.id == quote.id;
        } )

    }


}
