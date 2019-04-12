var db = require("../models");
var prices = require('../prices')


module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    prices.getBin("BTC", function(btc) {
      console.log("BTC Price:", btc);
      
      prices.getBin("ETH", function(eth) {
        console.log("ETH  Price:", eth);

        prices.getBin("EOS", function(EOS) {
          console.log("EOS Price:", EOS);

          prices.getBin("NEO", function(NEO) {
            console.log("NEO Price:", NEO);

            prices.getBin("XRP", function(XRP) {
              console.log("XRP Price:", XRP);

              prices.getCob("BTC", function(BTC_cob) {
                console.log("XRP Price:", XRP);

                prices.getCob("ETH", function(ETH_cob) {
                  console.log("XRP Price:", XRP);

                  prices.getCob("EOS", function(EOS_cob) {
                    console.log("XRP Price:", XRP);

                    prices.getCob("NEO", function(NEO_cob) {
                      console.log("XRP Price:", XRP);
                      
                      prices.getCob("XRP", function(XRP_cob) {
                        console.log("XRP Price:", XRP);

                res.render("coins", {
                  btc: btc.BTCUSDT,
                  eth: eth.ETHUSDT,
                  eos: EOS.EOSUSDT,
                  neo: NEO.NEOUSDT,
                  xrp: XRP.XRPUSDT,
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
  });
});
});
});
});
});
});
};
  // Load example page and pass in an example by id
  // app.get("/example/:id", function(req, res) {
  //   db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.render("example", {
  //       example: dbExample
  //     });
  //   });
  // });

  // Render 404 page for any unmatched routes
