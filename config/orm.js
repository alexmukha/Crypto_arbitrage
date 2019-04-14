// *********************************************************************************
// orm.js - This file offers a set of easier-to-use methods for interacting with the MySQL db.
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("./config.json");

// ORM
// =============================================================

var tableName = "users";

var orm = {
  // Here our ORM is creating a simple method for performing a query of the entire table.
  // We make use of the callback to ensure that data is returned only once the query is done.
  allUsers: function(callback) {
    var s = "SELECT * FROM " + tableName;

    connection.query(s, function(err, result) {
      callback(result);
    });
  },

  // Here our ORM is creating a simple method for performing a query of a single users in the table.
  // Again, we make use of the callback to grab a specific users from the database.
  searchUsers: function(name, callback) {
    var s = "SELECT * FROM " + tableName + " WHERE routedb=?";

    connection.query(s, [name], function(err, result) {
      callback(result);
    });
  },

  // Here our ORM is creating a simple method for adding userss to the database
  // Effectively, the ORM's simple addUser method translates into a more complex SQL INSERT statement.
  addUsers: function(users, callback) {
    // Creating a routedb so its easy to search.

    // Using a RegEx Pattern to remove spaces from users.name
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    var routedb = users.name.replace(/\s+/g, "").toLowerCase();
    console.log(routedb);

    var s = "INSERT INTO " + tableName + " (routedb, login, password, coin1, coin2, coin3, coin4, coin5) VALUES (?,?,?,?,?,?,?,?)";

    connection.query(s, [routedb, users.login, users.password, users.coin1, users.coin2, users.coin3, users.coin4, users.coin5], function(
      err,
      result
    ) {
      callback(result);
    });
  }
};

module.exports = orm;
