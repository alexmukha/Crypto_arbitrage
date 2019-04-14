// const db = require("../../models");

console.log("Blahblah")
$(document).ready(()=>{
  


///////////////////////////

  $("#add-btn").on("click", function(event) {
    event.preventDefault();
  
    // console.log("Adding new users...");
    // make a newUsers obj
    var newUsers = {
      login: $("#Email1").val().trim(),
      password: $("#Password1").val().trim()
    };
    // send an AJAX POST-request with jQuery
    $.post("/api/register", newUsers)
      .then(function(data) {
        // console.log(data);
      }); 
    // empty each input box by replacing the value with an empty string
    $("#Email1").val("");
    $("#Password1").val("");
  });

  /////////////////////
  // Login code
  $("#login").on("click", function(event) {
    event.preventDefault();
    var login = $("#Email1").val().trim();
    var password = $("#Password1").val();
    
      // $.get("/api/login" + loginString, function(data) {
        $.get("/api/users", function(data) {
        for (var i=0; i<data.length; i++) {
          if (login === data[i].login && password === data[i].password){
            console.log("Match login: "+data[i].login);
            console.log("Match password: "+data[i].password);
            var loggedIn = true;
            location.reload("coins");

            var username = $('#Email1').val().trim();
            var cake = document.cookie.split("name=")[1];
            console.log(cake);
          

          } else {
            // console.log(data[i].login);
          }
        }
        // console.log(data);
        users = data;
        if (!users || !users.length) {
          console.log("Database is empty");
          // cookie();
        }
        else {
          // nocookie();
        }
      });
    // }

  
  // });
/// cookie data
/////////////////
//   

////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

 // Gets an optional query string from our url (i.e. ?user_id=23)
 var url = window.location.search;
 var userId;
 // Sets a flag for whether or not we're updating a user to be false initially
 var updating = false;
// orySelect.val()

 // Submits a new user and brings user to blog page upon completion
 function submituser(user) {
   $.post("/api/users/", user, function() {
     window.location.href = "/users";
   });
 }

 // Gets user data for a user if we're editing
 function getUsers(id) {
   $.get("/api/login/" + id, function(data) {
     if (data) {
       // If this user exists, prefill our cms forms with its data
       loginInput.val(data.login);
       passwordInput.val(data.password);
      //  userCategorySelect.val(data.category);
       // If we have a user with this id, set a flag for us to know to update the user
       // when we hit submit
       console.log(loginInput.val(data.login));
       console.log(passwordInput.val(data.password));
       
       updating = true;
     }
   });
 }

 // Update a given user, bring user to the blog page when done
 function updateuser(user) {
   $.ajax({
     method: "PUT",
     url: "/api/users",
     data: user
   })
     .then(function() {
       window.location.href = "/blog";
     });
 }
 /////////////////////////////////////////////
 //////////////////////////////////////////
});
});