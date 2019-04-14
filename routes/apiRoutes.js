var db = require("../models");
var prices = require('../prices');
// var orm = require("../models");
const VERBOSE = false;


function console_(msg) {
  if(VERBOSE) {
    // console.log(msg);
  }
}
module.exports = function(app) {



  ////////////////////////////////////////
  // Coin code below
  app.get("/api/pricesBin", function(req, res) {
    prices.getBin("BTC", function(btc) {
      console_("BTC Price:", btc);
      
      prices.getBin("ETH", function(eth) {
        console_("BTC Price:", eth);

        prices.getBin("EOS", function(EOS) {
          console_("EOS Price:", EOS);

          prices.getBin("NEO", function(NEO) {
            console_("NEO Price:", NEO);

            prices.getBin("XRP", function(XRP) {
              console_("XRP Price:", XRP);

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
      console_("BTC Price:", BTC_cob);

      prices.getCob("ETH", function(ETH_cob) {
        console_("ETH Price:", ETH_cob);

        prices.getCob("EOS", function(EOS_cob) {
          console_("EOS Price:", EOS_cob);

          prices.getCob("NEO", function(NEO_cob) {
            console_("NEO Price:", NEO_cob);
            
            prices.getCob("XRP", function(XRP_cob) {
              console_("XRP Price:", XRP_cob);

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

////////////////////////////////
// app.get("/api/login", function(req, res) {
//   db.usres.findAll({
//     where: {
//       login: req.params.email
//     }
//   })
//     .then(function(users) {
//       console.log(users)
//       res.json(users);
//     });
// });
app.get("/api/login/", function(req, res) {
  db.users.findAll({})
    .then(function(user) {
      res.json(user);
      console.log(user);
    });
});
////////////////////////////////
app.post("/api/users", function(req, res) {
  // Take the request...
  var users = req.body;
  //  console.log(users)
  db.users.create(users).then(function(){
    res.status(201).end();
  });

  // // Then send it to the ORM to "save" into the DB.
  // orm.addUsers(users, function(data) {
  //   console.log(data);
  // });

});

   
};
