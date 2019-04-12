var db = require("../models");
var prices = require('../prices')

module.exports = function(app) {
  app.get("/api/pricesBin", function(req, res) {
    prices.getBin("BTC", function(btc) {
      console.log("BTC Price:", btc);
      
      prices.getBin("ETH", function(eth) {
        console.log("BTC Price:", eth);

        prices.getBin("EOS", function(EOS) {
          console.log("EOS Price:", EOS);

          prices.getBin("NEO", function(NEO) {
            console.log("NEO Price:", NEO);

            prices.getBin("XRP", function(XRP) {
              console.log("XRP Price:", XRP);

              res.json({
                btc: btc.BTCUSDT,
                eth: eth.ETHUSDT,
                eos: EOS.EOSUSDT,
                neo: NEO.NEOUSDT,
                xrp: XRP.XRPUSDT
              });
           });
         });
       });
    });
  })
});

  // Get all examples
  app.get("/api/pricesCob", function(req, res) {
    prices.getCob("BTC", function(BTC_cob) {
      console.log("BTC Price:", BTC_cob);

      prices.getCob("ETH", function(ETH_cob) {
        console.log("ETH Price:", ETH_cob);

        prices.getCob("EOS", function(EOS_cob) {
          console.log("EOS Price:", EOS_cob);

          prices.getCob("NEO", function(NEO_cob) {
            console.log("NEO Price:", NEO_cob);
            
            prices.getCob("XRP", function(XRP_cob) {
              console.log("XRP Price:", XRP_cob);

              res.json({
                  btc_cob: BTC_cob,
                  eth_cob: ETH_cob,
                  eos_cob: EOS_cob,
                  neo_cob: NEO_cob,
                  xrp_cob: XRP_cob
              });
           });
         });
       });
    });
  })
});
};
