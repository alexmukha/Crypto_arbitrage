var db = require("../models");
var prices = require('../prices')


module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
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

                res.render("coins", {
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
  });
});
  // Load example page and pass in an example by id
  // app.get("/example/:id", function(req, res) {
  //   db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.render("example", {
  //       example: dbExample
  //     });
  //   });
  // });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
