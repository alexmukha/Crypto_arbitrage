// const keys = require("./keys")

// console.log(process.env)
const binance = require('node-binance-api')().options({
    APIKEY: process.env.BINANCE_API,
    APISECRET: process.env.BINANCE_SECRET,
    useServerTime: true //
  });

const cobinhood = require('node-cobinhood-api');
 
cobinhood.options({
    'apiKey': process.env.COBINHOOD_API,
    'verbose': true
});

function getTicker(currency, callback) {

//Getting the Prices for Ripple from Binance
  binance.prices(`${currency.toUpperCase()}USDT`, (error, ticker) => {
    if (!error) {
      console.log(`Binance price of ${currency} is:`, ticker);
      if (callback) {
        callback(ticker);
      }
    }
  });
}

function getPrice(currency, callback) {
  cobinhood.lastPrice(`${currency.toUpperCase()}-USDT`, (error, lastPrice) => {
    if (!error) {
        console.log(`Cobinhood price of ${currency} is:`, lastPrice);
        if (callback) {
          callback(lastPrice);
        }
        
    }
  });
};

module.exports = {
  getPrice: getPrice,
  getTicker: getTicker
};