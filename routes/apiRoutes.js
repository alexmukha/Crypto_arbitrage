var db = require("../models");
var prices = require('../prices')

module.exports = function(app) {
  app.get("/api/prices", function(req, res) {
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
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
