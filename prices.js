const binance = require('node-binance-api')().options({
    APIKEY: 'iUCdF82usrCcuNJdpTc4MsvCg9cYJYDUhvDJJYkcqEDl3rd30GYGA6dOBRpwc7kv',
    APISECRET: 'Kw63YBEpwuzZFmY76L98qSZyA2ZK1AxCLuG48prYe9jrodCrIf5ZdA4r0P903EnJ',
    useServerTime: true //
  });

const cobinhood = require('node-cobinhood-api');
 
cobinhood.options({
    'apiKey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfdG9rZW5faWQiOiIyZTkxODY3Ni1iZjZiLTQ3OTktYjMwZi01MmNmYjUzZTA2YzAiLCJzY29wZSI6WyJzY29wZV9leGNoYW5nZV90cmFkZV9yZWFkIiwic2NvcGVfZXhjaGFuZ2VfdHJhZGVfd3JpdGUiXSwidXNlcl9pZCI6ImZmNGZjOTc3LWExMWYtNDQwNC05YzJkLWI1ZWNiMzEwZDBjYyJ9.1lpm7hWUqeywfrQ6sjN8acr-lX7PQPwdW819mptzAt8.V2:dcf5c7cfdc16a57878e91f543f3660d47fea97452bc05302e774713588d91fbf',
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