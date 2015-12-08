//  getBitcoinPrice('USD'): 
//  returns Bitcoins average price in US dollars.

var getBitcoinPrice = function(currency) {
    addRealFunctionalityOnTheFly();

    var bitcoinPrice = $.get( "https://api.bitcoinaverage.com/ticker/all", function( data ) {
            console.log("Average price in the last 24 hours is " + data.USD["24h_avg"]);
            return data.USD["24h_avg"];
    });
};

anything.prototype.getBitcoinPrice = getBitcoinPrice;