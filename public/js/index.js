// Get references to page elements
var $exampleText = $("#example-text");
var $exampleDescription = $("#example-description");
var $submitBtn = $("#submit");
var $exampleList = $("#example-list");

// The API object contains methods for each kind of request we'll make
var API = {
  
  getPrices: function() {
    return $.ajax({
      url: "api/pricesBin",
      type: "GET"
    })
  },

  getPrices_cob: function() {
    return $.ajax({
      url: "api/pricesCob",
      type: "GET"
    })
  },

  create: function(example) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/register",
      data: JSON.stringify(example)
    });
  },

  create: function(example) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/profile",
      data: JSON.stringify(example)
    });
  },

  getUsers: function() {
    return $.ajax({
      url: "api/login",
      type: "GET"
    });
  },


  deleteExample: function(id) {
    return $.ajax({
      url: "api/examples/" + id,
      type: "DELETE"
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list
var refreshExamples = function() {
  API.getExamples().then(function(data) {
    var $examples = data.map(function(example) {
      var $a = $("<a>")
        .text(example.text)
        .attr("href", "/example/" + example.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": example.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $exampleList.empty();
    $exampleList.append($examples);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var example = {
    text: $exampleText.val().trim(),
    description: $exampleDescription.val().trim()
  };

  if (!(example.text && example.description)) {
    // alert("You must enter an example text and description!");
    return;
  }

  API.saveExample(example).then(function() {
    refreshExamples();
  });

  $exampleText.val("");
  $exampleDescription.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteExample(idToDelete).then(function() {
    refreshExamples();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$exampleList.on("click", ".delete", handleDeleteBtnClick);

function updatePrices() {
  API.getPrices()
  .then(function(prices) {
    // console.log(prices)
    $('#price-btc').text(prices.btc);
    $('#price-eth').text(prices.eth);
    $('#price-xrp').text(prices.xrp);
    $('#price-eos').text(prices.eos);
    $('#price-neo').text(prices.neo);

  });
}

function updatePrices_Cob() {
  API.getPrices_cob()
  .then(function(prices_cob) {
    // console.log(prices_cob)
    $('#price-btc-cob').text(prices_cob.btc_cob);
    $('#price-eth-cob').text(prices_cob.eth_cob);
    $('#price-xrp-cob').text(prices_cob.xrp_cob);
    $('#price-eos-cob').text(prices_cob.eos_cob);
    $('#price-neo-cob').text(prices_cob.neo_cob);
  });
}

setInterval(updatePrices, 10*1000);
setInterval(updatePrices_Cob, 10*1000);