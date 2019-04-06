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

function getPrices() {


//Getting the Prices for Ripple from Binance
  binance.prices('BTCUSDT', (error, ticker) => {
    if (!error) {
    console.log("Binance Bitcoin price of BTC is: ", ticker.BTCUSDT);
    }
  });

  binance.prices('ETHUSDT', (error, ticker) => {
    if (!error) {
    console.log("Binance Ethereum price is: ", ticker.ETHUSDT);
    }
  });

  cobinhood.lastPrice("BTC-USDT", (error, lastPrice) => {
    if (!error) {
        console.log("Cobinhood Bitcoin last price:", lastPrice);
    }
});
  cobinhood.lastPrice("ETH-USDT", (error, lastPrice) => {
    if (!error) {
      console.log("Cobinhood Ethereum last price:", lastPrice);
  }
});



};


setInterval(getPrices,5000)


module.exports = getPrices;