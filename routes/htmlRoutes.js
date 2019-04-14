var db = require("../models");
var prices = require('../prices');
const VERBOSE = false;

function console_(msg) {
  if(VERBOSE) {
    // console.log(msg);
  }
}


module.exports = function(app) {

  // if (db.loggedIn === true) {
  // Load index page
  app.get("/coins", function(req, res) {
    prices.getBin("BTC", function(btc) {
      console_("BTC Price:", btc);
      
      prices.getBin("ETH", function(eth) {
        console_("ETH  Price:", eth);

        prices.getBin("EOS", function(EOS) {
          console_("EOS Price:", EOS);

          prices.getBin("NEO", function(NEO) {
            console_("NEO Price:", NEO);

            prices.getBin("XRP", function(XRP) {
              console_("XRP Price:", XRP);

              prices.getCob("BTC", function(BTC_cob) {
                console_("XRP Price:", XRP);

                prices.getCob("ETH", function(ETH_cob) {
                  console_("XRP Price:", XRP);

                  prices.getCob("EOS", function(EOS_cob) {
                    console_("XRP Price:", XRP);

                    prices.getCob("NEO", function(NEO_cob) {
                      console_("XRP Price:", XRP);
                      
                      prices.getCob("XRP", function(XRP_cob) {
                        console_("XRP Price:", XRP);

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


// } else {
  //Load login page
  app.get("/", function(req, res) {
    res.render("login");
  });
// }

app.get("/login", function(req, res) {
  res.render("login");
});

// app.get("/coins", function(req, res) {
//   res.render("coins");
// });


app.get("/users", function(req, res) {
  res.render("users");
});

app.get("/register", function(req, res) {
  res.render("register");
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
