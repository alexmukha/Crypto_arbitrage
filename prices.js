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

function getPrices(currency) {

//Getting the Prices for Ripple from Binance
  binance.prices(`${currency.toUpperCase()}USDT`, (error, ticker) => {
    if (!error) {
    console.log(`Binance price of ${currency} is:`, ticker.BTCUSDT);
    }
  });
  cobinhood.lastPrice(`${currency.toUpperCase()}-USDT`, (error, lastPrice) => {
    if (!error) {
        console.log(`Cobinhood price of ${currency} is:`, lastPrice);
    }
  });
};

module.exports = getPrices;