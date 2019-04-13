// const keys = require("./keys")

// console.log(process.env)

const VERBOSE = false;

function console_(msg) {
  if(VERBOSE) {
    console.log(msg);
  }
}

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

function get_Bin(currency, callback) {

//Getting the Prices for Ripple from Binance
  binance.prices(`${currency.toUpperCase()}USDT`, (error, ticker) => {
    if (!error) {
      console_(`Binance price of ${currency} is:`, ticker);
      if (callback) {
        callback(ticker);
      }
    }
  });
}
function get_Cob(currency, callback) {
  cobinhood.lastPrice(`${currency.toUpperCase()}-USDT`, (error, lastPrice) => {
    if (!error) {
        console_(`Cobinhood price of ${currency} is:`, lastPrice);
        if (callback) {
          callback(lastPrice);
        }
    }
  });
};


module.exports = {
  getCob: get_Cob,
  getBin: get_Bin
};